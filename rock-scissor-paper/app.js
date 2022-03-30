const computerChoiceDisplay = document.getElementById("computer-choice");
const myChoiceDisplay = document.getElementById("my-choice");
const finalResult = document.getElementById("result");
let myChoice;
let computerChoice;
let compareResult;

const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    myChoice = e.target.id;
    myChoiceDisplay.innerHTML = myChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber == 1) {
    computerChoice = "rock";
  }
  if (randomNumber == 2) {
    computerChoice = "paper";
  }
  if (randomNumber == 3) {
    computerChoice = "scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === myChoice) {
    compareResult = "its a draw!";
  }
  if (computerChoice === "rock" && myChoice === "paper") {
    compareResult = "Hurray!! You Win .... ";
  }
  if (computerChoice === "rock" && myChoice === "scissor") {
    compareResult = "You Lost!! .... Try again";
  }
  if (computerChoice === "paper" && myChoice === "scissor") {
    compareResult = "Hurray!! You Win .... ";
  }
  if (computerChoice === "paper" && myChoice === "rock") {
    compareResult = "You Lost!! .... Try again";
  }
  if (computerChoice === "scissor" && myChoice === "rock") {
    compareResult = "Hurray!! You Win .... ";
  }
  if (computerChoice === "scissor" && myChoice === "paper") {
    compareResult = "You Lost!! .... Try again";
  }
  finalResult.innerHTML = compareResult;
}
