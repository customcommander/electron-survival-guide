howtos=$(patsubst howtos/%,build/docs/howtos/%.md,$(shell find howtos -mindepth 1 -maxdepth 1 -type d))

build/docs: build/mkdocs.yml build/docs/README.md build/docs/img

build/docs/img: $(patsubst howtos/%,build/docs/img/%,$(shell find howtos -type f -name "*.png"))
build/docs/img/%: howtos/%
	mkdir -p $(@D)
	cp -f $< $@

build/mkdocs.yml: mkdocs.yml $(howtos)
	mkdir -p $(@D)
	cat $< >$@
	for p in $$(echo $(patsubst build/docs/%,%,$(sort $(filter-out $<,$^)))); do echo "    - '$$p'"; done >>$@

build/docs/README.md: README.md
	mkdir -p $(@D)
	cp -f $< $@

build/docs/howtos/%.md: scripts/readme.sh scripts/code.awk
	echo $^
	mkdir -p $(@D)
	HOWTO=$* ./$< >$@

clean:; rm -rfv build