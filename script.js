'use strict'
// Selecting Elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const currentEl0 = document.getElementById('current--0')
const currentEl1 = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const scores = [0, 0]
let currentScore = 0
let activePlayer = 0

// Starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

// Rolling Dice
btnRoll.addEventListener('click', function () {
    // Generating a random dice roll
    let dice = Math.floor(Math.random() * 6) + 1
    console.log(dice)

    // Display dice
    diceEl.classList.remove('hidden')
    diceEl.src = `Dice-photos/Dice${dice}.png`

    // check if the dice number 1 = true , switch to the next player
    if (dice !== 1) {
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent =
            currentScore
    } else {
        // Switch to the next player
        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
    }
})
