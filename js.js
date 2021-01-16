import "core-js/stable";

/////// GUESS MY NUMBER ///////

("use strict");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMsg = function (msg) {
  document.querySelector(".message").textContent = msg;
};

// again
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  displayMsg("Start Guessing");
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// high score

document.querySelector(".check-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const guess = Number(document.querySelector(".guess").value);

  // no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number ! ";
  }
  // wins
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Number ! ";
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;

    // wrong number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? "It's too high ! " : "It's too low ! ");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You have lost ! ";
      document.querySelector(".score").textContent = 0;
    }
  }
});
