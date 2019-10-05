let i
for (i = 1; i < 101; i++) {
  let marco = i % 3 === 0 && 'Marco!'
  let polo = i % 5 === 0 && 'Polo!'
  let marcoPolo = marco && polo && 'Marco! Polo!'

  document.write(`${marcoPolo || (marco || polo) || i} <br/>`)
}
