#!/bin/sh

cat $APP/intro.md
echo

for f in $(find $APP -type f -not -name "*.md" -not -name "screenshot.png" | sort); do
  ext=${f##*.}

  if [ "$ext" = "js" ]; then
    hlmode="javascript"
  else
    hlmode="html"
  fi

  echo $f
  echo '```' $hlmode
  cat $f
  echo
  echo '```'

done

echo

if [ -f $APP/screenshot.png ]; then
  echo "![]($APP/screenshot.png)"
  echo "![](./screenshot.png)"
fi
