apps = $(shell find . -type d -name "app*" -depth 1)

README.md: intro.md $(patsubst %,%/README.md,$(apps))
	cat $< $(filter-out intro.md,$(sort $^)) >$@

%/README.md:
	APP=$* ./app-readme.sh >$@