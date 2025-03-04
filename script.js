document.getElementById("next").addEventListener("click", playRound);
document.getElementById("restart").addEventListener("click", restartGame);

let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

function playRound(){
    let getHumanChoice = prompt("Enter Rock, Paper, or Scissors");
    let getComputerChoice = Math.floor(Math.random() * 3) + 1;

    function generateComputerChoice(){
        if(getComputerChoice === 1){
            return "rock";
        } else if(getComputerChoice === 2){
            return "paper";
        } else {
            return "scissors";
        }
    }

    let humanChoice = getHumanChoice.toLowerCase();
    let computerChoice = generateComputerChoice();

    document.getElementById("humanChoice").innerHTML = humanChoice;
    document.getElementById("computerChoice").innerHTML = computerChoice;

    if(humanChoice === computerChoice){
        document.getElementById("humanPoint").innerHTML = "Human: " + humanScore;
        document.getElementById("computerPoint").innerHTML = "Computer: " + computerScore;
        document.getElementById("roundWinner").innerHTML = "It's a tie!";
        gameRound += 1;
        if(gameRound === 1){
            document.getElementById("next").textContent = "Next Round";
        }
        if(gameRound === 5){
            gameWinner();
        }
    } else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore += 1;
        document.getElementById("humanPoint").innerHTML = "Human: " + humanScore;
        document.getElementById("computerPoint").innerHTML = "Computer: " + computerScore;
        document.getElementById("roundWinner").innerHTML = "Human wins!";
        gameRound += 1;
        if(gameRound === 1){
            document.getElementById("next").textContent = "Next Round";
        }
        if(gameRound === 5){
            gameWinner();
        }
    } else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1;
        document.getElementById("humanPoint").innerHTML = "Human: " + humanScore;
        document.getElementById("computerPoint").innerHTML = "Computer: " + computerScore;
        document.getElementById("roundWinner").innerHTML = "Human wins!";
        gameRound += 1;
        if(gameRound === 1){
            document.getElementById("next").textContent = "Next Round";
        }
        if(gameRound === 5){
            gameWinner();
        }
    } else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore += 1;
        document.getElementById("humanPoint").innerHTML = "Human: " + humanScore;
        document.getElementById("computerPoint").innerHTML = "Computer: " + computerScore;
        document.getElementById("roundWinner").innerHTML = "Human wins!";
        gameRound += 1;
        if(gameRound === 1){
            document.getElementById("next").textContent = "Next Round";
        }
        if(gameRound === 5){
            gameWinner();
        }
    } else {
        computerScore += 1;
        document.getElementById("humanPoint").innerHTML = "Human: " + humanScore;
        document.getElementById("computerPoint").innerHTML = "Computer: " + computerScore;
        document.getElementById("roundWinner").innerHTML = "Computer wins!";
        gameRound += 1;
        if(gameRound === 1){
            document.getElementById("next").textContent = "Next Round";
        }
        if(gameRound === 5){
            gameWinner();
        }
    }
}
function gameWinner(){
        if(humanScore > computerScore){
            document.getElementById("next").disabled = true;
            document.getElementById("restart").style.display = "block";
            document.getElementById("gameWinner").innerHTML = "Human wins the game!";
        } else if(humanScore < computerScore){
            document.getElementById("next").disabled = true;
            document.getElementById("restart").style.display = "block";
            document.getElementById("gameWinner").innerHTML = "Computer wins the game!";
        } else {
            document.getElementById("next").disabled = true;
            document.getElementById("restart").style.display = "block";
            document.getElementById("gameWinner").innerHTML = "It's a tie!";
        }
    }

function restartGame(){
    humanScore = 0;
    computerScore = 0;
    gameRound = 0;
    document.getElementById("humanPoint").innerHTML = "Human: " + humanScore;
    document.getElementById("computerPoint").innerHTML = "Computer: " + computerScore;
    document.getElementById("gameWinner").innerHTML = "";
    document.getElementById("next").disabled = false;
    document.getElementById("next").textContent = "Start Game";
    document.getElementById("restart").style.display = "none";
}

document.getElementById("next").textContent = "Start Game";
document.getElementById("restart").style.display = "none";