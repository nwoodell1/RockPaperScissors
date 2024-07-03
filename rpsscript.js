
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
    humanchoice = humanchoice.toLowerCase();

    console.log("human says " + humanchoice)

    return humanchoice
}


var humanscore = 0
var computerscore = 0

function printscore() {
    console.log("human score " + humanscore)
    console.log("comp score " + computerscore)
}

function playround() {
    /*get plays*/
    var userplay = getHumanChoice()
    var compplay = getComputerChoice()
    /*tie*/
    if (userplay === compplay) { alert("Its a tie") }
    /*human wins*/
    else if (
        (userplay === "rock" && compplay === "scissors") ||
        (userplay === "paper" && compplay === "rock") ||
        (userplay === "scissors" && compplay === "paper")
    ) { alert(userplay + " beats " + compplay + ", Human wins this round"); humanscore++ }
    /*comp wins*/
    else { alert(userplay + " beats " + compplay + " , Comp wins this round"); computerscore++ }
    /*tell users the score*/
    console.clear()
    printscore()
}

function playgame() {
    playround();
    playround();
    playround();
    playround();
    playround();
    if (humanscore > computerscore) { alert("You win"); console.log("the user won") }
    else if (computerscore > humanscore) { alert("you lose sucker, the robot overlords are coming for you"); console.log("theyre coming, just like Will Smith warned us") }
    else { alert("Its a tie. We'll be back"); console.log("The robots are biding their time. They'll be back for blood") }
}

playgame()





