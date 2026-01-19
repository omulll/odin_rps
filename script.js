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

console.log(getHumanChoice());
console.log(getComputerChoice());