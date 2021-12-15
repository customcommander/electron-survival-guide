#!/bin/sh

cat $APP/intro.md

for f in $(find $APP -type f -not -name "*.md" -not -name "screenshot.png" | sort); do
  ext=$(echo $f | cut -d. -f2)

  if [ "$ext" = "js" ]; then
    hlmode="javascript"
  else
    hlmode="html"
  fi

  echo $f
  echo '```' $hlmode
  cat $f
  echo '```'

done

if [ -f $APP/screenshot.png ]; then
  echo "![]($APP/screenshot.png)"
fi
