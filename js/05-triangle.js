let i, j
for (i = 1; i < 8; i++) {
  let message = ""

  for (j = 0; j < i; j++) {
    message += "#"
  }

  document.write(`${message} <br/>`)
}
