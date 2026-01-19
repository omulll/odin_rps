let humanScore = 0;
let computerScore = 0;

//Randomly returns rock, paper, or scissors
function getComputerChoice() {
    let rpsValue = Math.trunc(Math.random() * 3);

    switch (rpsValue) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

//Returns user choice, assuming they will always return a valid choice.
function getHumanChoice() {
    let choice = prompt("Type your choice: ");

    return (choice);
}

//Plays a single round of rps, tallies score, and logs the winner.
function playRound (humanChoice, computerChoice) {
    //makes humanChoice case-insensitive
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    let win = () => {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }

    let lose = () => {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }

    if (humanChoice === computerChoice) {
        console.log(`You tied with ${humanChoice}! Noone wins.`);
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") win();
        if (computerChoice === "Paper") lose();
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") win();
        if (computerChoice === "Scissors") lose();
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") win();
        if (computerChoice === "Rock") lose();
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);