let i
for (i = 0; i < 16; i++) {
  let evenOrOdd = i % 2 === 0
  let output = evenOrOdd ? 'even' : 'odd'

  document.write(`${i} is ${output} <br/>`)
}
