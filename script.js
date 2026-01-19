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



console.log(getComputerChoice());