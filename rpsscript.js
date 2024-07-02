
function getComputerChoice() {
    var randomnumber = Math.random();
    var computerchoice;
    if (randomnumber < 0.33) {
        computerchoice = "rock";
    } else if (randomnumber < 0.66) { computerchoice = "paper"; }
    else { computerchoice = "scissors"; }
    console.log("comp says " + computerchoice)

    return computerchoice
}



function getHumanChoice() {
    var humanchoice = prompt("Rock, Paper, or Scissors?")


    console.log("human says " + humanchoice)

    return humanchoice
}


var humanscore = 0
var computerscore = 0



function playround(x, y) {
    /*tie*/
    if (x === y) { alert("Its a tie") }
    /*human wins*/
    else if (
        (x === "rock" && y === "scissors") ||
        (x === "paper" && y === "rock") ||
        (x === "scissors" && y === "paper")
    ) { alert(x + " beats " + y + ", Human wins this round"); humanscore++ }
    /*comp wins*/
    else { alert(y + " beats " + x + " , Comp wins this round"); computerscore++ }

};

const userplay = getHumanChoice()
const compplay = getComputerChoice()

playround(userplay, compplay)
console.log("human score " + humanscore)
console.log("comp score " + computerscore)
