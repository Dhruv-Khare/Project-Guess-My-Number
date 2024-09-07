"use strict";

// document.querySelector('.message').textContent= 'correct answer🎉';
//  const x=document.querySelector('.number').value= 23;
// document.querySelector('.guess').value=56;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector(".score").textContent);
// document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Guess❌";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "correct answer🎉";
    document.querySelector(".highscore").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low 😏";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤦‍♂️ You lost the Game!";
      document.querySelector(".score").textContent = 0;
      
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High😏";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤦‍♂️ You lost the Game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score =20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = '?';
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = '';

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing..";
  document.querySelector(".number").style.width = "15rem";
});
