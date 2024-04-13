"use strict";

/*

console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "correct Guess !";

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 17;
console.log(document.querySelector(".guess").value);

*/

/*

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);

  console.log(
    (document.querySelector(".message").textContent = "Correct Guess !")
  );
});

*/

let secreteNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(typeof guess, guess);
  //   console.log(typeof guess); // it is a string we to conver it to Number . use Number Function

  if (!guess) {
    // if there is no input
    document.querySelector(".message").textContent = "NO INPUT ⛔";
  }
  // When Player Wins The Game
  else if (guess === secreteNumber) {
    document.querySelector(".number").textContent = secreteNumber;

    document.querySelector(".message").textContent = " 🎉Correct Guess !!! ";

    document.querySelector(".header").textContent = " 🏆You Won !";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // When the guess is greater than the secrete number
  else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📈Too High ! ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        " 😭 You Loose The game !";
      document.querySelector(".score").textContent = 0;
    }
  }
  // When the guess is lesser than the secrete number
  else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📉Too Low ! ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        " 😭 You Loose The game !";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// To restart the game after clicking on again :
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = " start guessing.....";

  score = 20;
  document.querySelector(".score").textContent = 20;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".header").textContent = " Guess My Number";

  document.querySelector(".number").textContent = "?";

  secreteNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = "";
});
