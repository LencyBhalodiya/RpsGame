let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const winsound = new Audio("sounds/cash.mp3");
const losssound = new Audio("sounds/aww.mp3");

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });
  paper_div.addEventListener("click", function () {
    game("paper");
  });
  scissor_div.addEventListener("click", function () {
    game("scissor");
  });
}
main();

function getcomputerchoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userchoice, computerChoice) {
  const userchoice_div = document.getElementById(userchoice);
  const computerChoice_div = document.getElementById(computerChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${userchoice}${smallUserWord} beats ${computerChoice}${smallcompWord} = you win`;

  computerChoice_div.classList.add("red-glow");
  setTimeout(() => computerChoice_div.classList.remove("red-glow"), 1000);

  userchoice_div.classList.add("green-glow");
  setTimeout(function () {
    userchoice_div.classList.remove("green-glow");
  }, 1000);
  winsound.play();
}

function lose(userchoice, computerChoice) {
  const userchoice_div = document.getElementById(userchoice);
  const computerChoice_div = document.getElementById(computerChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();

  result_div.innerHTML = `${userchoice}${smallUserWord} doesn't beats ${computerChoice}${smallcompWord} = you loss`;

  userchoice_div.classList.add("red-glow");
  setTimeout(() => userchoice_div.classList.remove("red-glow"), 1000);

  computerChoice_div.classList.add("green-glow");
  setTimeout(() => computerChoice_div.classList.remove("green-glow"), 1000);
  losssound.play();
}
function draw(userchoice, computerChoice) {
  const userchoice_div = document.getElementById(userchoice);
  const computerChoice_div = document.getElementById(computerChoice);
  const smallUserWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();

  result_div.innerHTML = `${userchoice}${smallUserWord} equals to ${computerChoice}${smallcompWord} = you draw`;

  userchoice_div.classList.add("gray-glow");
  setTimeout(function () {
    userchoice_div.classList.remove("gray-glow");
  }, 500);
}

function game(userchoice) {
  const computerChoice = getcomputerchoice();

  switch (userchoice + computerChoice) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userchoice, computerChoice);
      break;

    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(userchoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      draw(userchoice, computerChoice);
  }
}
