const { prompt, alert } = window
const VALID_INPUTS = ['heads', 'tails']

let coinFlip = Math.floor(Math.random() * 11)
let choice = prompt("heads or tails").toLowerCase()

if (!VALID_INPUTS.includes(choice)) {
  alert("please enter heads or tails only.")
  window.location.reload(true)
}

let heads = coinFlip > 5
let coinHead = heads ? 'heads' : 'tails'
let outcome = coinHead == choice ? 'you win' : 'you lose'

document.write(`The flip was ${coinHead} and you chose ${choice}...${outcome}!`)

// I could've written with a large if else statement (or switch) but found this approach to be more clean
