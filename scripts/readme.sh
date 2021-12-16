#!/bin/sh

intromd_file=howtos/$HOWTO/intro.md
mainjs_file=howtos/$HOWTO/main.js
rendererhtml_file=howtos/$HOWTO/renderer.html
rendererjs_file=howtos/$HOWTO/renderer.js
webpack_file=howtos/$HOWTO/webpack.config.js

code_intro()
{
  echo
  awk -v show="intro" -f scripts/code.awk $1
  echo
}

code_block()
{
  echo '```' $1 title="'$(basename $2)'"
  awk -v show="code" -f scripts/code.awk $2
  echo '```'
}

head -1 $intromd_file

echo '!!! tldr'

awk 'NR>1{ print "    " $0 }' $intromd_file

if [ -f $mainjs_file ]; then
  echo "## Main Process"
  code_intro $mainjs_file
  code_block javascript $mainjs_file
fi

if [ -f $rendererhtml_file ]; then
  echo "## Renderer Page"
  code_intro $rendererhtml_file
  code_block html $rendererhtml_file
fi

if [ -f $rendererjs_file ]; then
  echo "## Renderer Script"
  code_intro $rendererjs_file
  code_block javascript $rendererjs_file
fi

if [ -f $webpack_file ]; then
  echo "## Webpack Configuration"
  code_intro $webpack_file
  code_block javascript $webpack_file
fi

imgs=$(find howtos/$HOWTO -type f -name "*.png")

if [ "$imgs" != "" ]; then
  echo "## Screenshot"
  for img in $imgs; do
    echo
    echo "![](../img/$HOWTO/$(basename $img))"
  done
fi
