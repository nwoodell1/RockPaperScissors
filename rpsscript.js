
function getComputerChoice() {
    var randomnumber = Math.random();
    var computerchoice;
    if (randomnumber < 0.33) {
        computerchoice = "rock";
    } else if (randomnumber < 0.66) { computerchoice = "paper"; }
    else { computerchoice = "scissors"; }
    console.log(computerchoice)
}

getComputerChoice()