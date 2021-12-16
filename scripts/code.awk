BEGIN {
  do_print=0
}

$0=="/**" || $0=="<!--" {
  if (show=="intro") {
    do_print=1
  }
  next
}

$0=="**/" || $0=="-->"{
  if (show=="intro") {
    nextfile
  }
  do_print=1
  next
}

do_print {
  print
}
