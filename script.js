"use strict";
//console.log(document.querySelector(".message").textContent);
//document.querySelector(".message").textContent = "Correct Number🎉🎊";
// console.log(document.querySelector('.message').textContent);

//document.querySelector(".number").textContent = 13;
//document.querySelector(".score").textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 21) + 1;
let score = 20;
let highScore = 0 ;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when there is no input or input==0;
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number";
  }
  //when Player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number 😄";
    document.querySelector('body').style.background = "rgba(89, 212, 41, 0.972)";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if(score > highScore){
      highScore=score
      document.querySelector('.highscore').textContent = highScore;
    }
     
  }
  else if(guess !== secretNumber){
    if (score > 1) {
      document.querySelector(".message").textContent = guess > secretNumber ? '↑ Too High!':'↑ Too Low!' ;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose 🙁";
      score--;
      document.querySelector(".score").textContent = score;
    }

  }
  // // when the number is too high
  // else if (guess > secretNumber) {
  //   //only when the score is greater than 1
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "↑ Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lose 🙁";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   }
  // }
  // //when the nuber is too low
  // else if (guess < secretNumber) {
  //   // only when the score is greater than 1
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "↑ Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lose 🙁 ";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click',function(){
  secretNumber = Math.trunc(Math.random() * 21) + 1;
 document.querySelector('.number').textContent = "?";
 document.querySelector('.message').textContent = "Start guessing..."
 document.querySelector('.score').textContent = 20;
 document.querySelector('.guess').value = '';
 document.querySelector('body').style.background = 'rgb(49, 46, 46)';
 document.querySelector(".number").style.width = "15rem";
});
