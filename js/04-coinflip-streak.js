let coinFlip, coinSide

do {
  coinFlip = Math.floor(Math.random() * 2)
  coinSide = coinFlip === 0 ? 'Heads' : 'Tails'
  document.write(`${coinSide} <br/>`)
}
while (coinSide !== 'Tails')
