function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

let numj = random(1, 3)

function computerPlay() {
        if (numj == 1) {
            return "Rock";
        }
        else if (numj == 2) {
            return "Paper";
        }
        else if (numj == 3) {
            return "Scissors";
        }

}


function playRound(playerSelection, computerSelection) {
    let a = playerSelection.toLowerCase();
    let b = computerSelection.toLowerCase();

    if (a == b) {
        return "Tie!"
    }
    else if (a == "rock" && b == "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (a == "rock" && b == "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (a == "paper" && b == "rock") {
        return "You Win! Paper beats Rock";
    }
    else if (a == "paper" && b == "scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if (a == "scissors" && b == "rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if (a == "scissors" && b == "paper") {
        return "You Win! Scissors beats Paper";
    }
  }
  
  let playerSelection = "ROCK";
  let computerSelection = computerPlay();
  console.log("Computer: "+computerPlay());
  console.log("Player: "+playerSelection);
  console.log(playRound(playerSelection, computerSelection));

