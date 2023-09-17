// implement a function which will returns 0, 1, 2

let generateNumber = (max) => {
  let num = Math.floor(Math.random() * max);
  return num;
};

// return rock paper and scissors

let getComputerChoice = () => {
  let num = generateNumber(3);
  let choice;
  if (num === 0) {
    choice = "Rock";
  } else if (num === 1) {
    choice = "Paper";
  } else if (num === 2) {
    choice = "Scissors";
  }

  return choice;
};

let playerSelection = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (
    (computerSelection === "rock" &&
      playerSelection === "scissors") ||
    (computerSelection === "scissors" &&
      playerSelection === "paper") ||
    (computerSelection=== "paper" &&
      playerSelection === "rock")
  ) {
    console.log(`Computer: ${computerSelection}, You: ${playerSelection}`);
    console.log("You Lose! Paper beats Rock");
  }
  else if (
      (computerSelection === "rock" &&
        playerSelection === "rock") ||
      (computerSelection === "scissors" &&
        playerSelection === "scissors") ||
      (computerSelection=== "paper" &&
        playerSelection === "paper ")
    ) {
      console.log(`Computer: ${computerSelection}, You: ${playerSelection}`);
      console.log("Choices are the same!");
  } else {
    console.log(`Computer: ${computerSelection}, You: ${playerSelection}`);
    console.log("You Win!");
  }
};

let game = () => {
  
  // loop five times
  for(let i=0; i<5; i++) {
    let userInput = prompt("Choose and enter Rock/Paper/Scissors")
    let computerChoice = getComputerChoice();
    playerSelection(userInput, computerChoice)


  }
}

game();



