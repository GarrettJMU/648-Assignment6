let coinFlip, i

for (i = 0; i < 10; i++) {
  coinFlip = Math.floor(Math.random() * 2)
  document.write(coinFlip === 0 ? 'Heads <br/>' : 'Tails <br/>')
}
