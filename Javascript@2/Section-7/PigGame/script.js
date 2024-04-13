"use strict";

// selecting Elements :
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0]; // array to store the total scores of the players

let currScore = 0;
let activePlayer = 0; // for switching the the player we should now which player is palying

let playing = true; // after winning to avoid the working of the buttons .
// Rolling Dice

btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1.Generate a random Dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;

    //2.Display Dice :
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    //   console.log(dice);

    // 3.check for roll 1 :
    if (dice !== 1) {
      // Add dice to current score
      currScore = currScore + dice;

      // current0El.textContent = currScore; instead of this store the scores dynamically

      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currScore = 0;
      // switch to the next player
      activePlayer = activePlayer === 0 ? 1 : 0;

      // to change the background of the active player
      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //1.Add the current score to active players total score

    scores[activePlayer] = scores[activePlayer] + currScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if the players score is >=100 :
    if (scores[activePlayer] >= 50) {
      playing = false; // here we got the winner so stop the workiing of all buttons
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      document.getElementById(`current--${activePlayer}`).textContent =
        "WINNER";

      diceEl.classList.add("hidden");

      // Finsih the game
    } else {
      //Switch to the next player

      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currScore = 0;

      activePlayer = activePlayer === 0 ? 1 : 0;

      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
    }
  }
});

// restart the game :
btnNew.addEventListener("click", function () {
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  currScore = 0;
  scores[0] = 0;
  scores[1] = 0;

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");

  activePlayer = activePlayer === 1 ? 0 : 0;
});
