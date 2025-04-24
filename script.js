const choices = ['rock', 'paper', 'scissors'];
const humanDisplay = document.querySelector('#humanDisplay');
const computerDisplay = document.querySelector('#computerDisplay');
const winnerDisplay = document.querySelector('#winnerDisplay');
const humanScoreDisplay = document.querySelector('#humanScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
const totalRounds = 5;

function playRound(humanChoice){
    if(roundNumber >= totalRounds){
        endGame();
        return;
    }

    roundNumber++;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let winner = '';

    if(humanChoice === computerChoice){
        winner = 'It\'s a Tie!';
    }else{
        switch(humanChoice){
            case 'rock':
                winner = (computerChoice === 'scissors') ? "You Win!" : "Computer Win!";
                break;

            case 'paper':
                winner = (computerChoice === 'rock') ? "You Win!" : "Computer Win!";
                break;

            case 'scissors':
                winner = (computerChoice === 'paper') ? "You Win!" : "Computer Win!";
                break;
        }
    }

    humanDisplay.textContent = `Human: ${humanChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    winnerDisplay.textContent = winner;
    winnerDisplay.classList.remove("win", "lose");

    switch(winner){
        case "You Win!":
            winnerDisplay.classList.add("win");
            humanScore++
            humanScoreDisplay.textContent = humanScore;
            break;

        case "Computer Win!":
            winnerDisplay.classList.add("lose");
            computerScore++
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    if(roundNumber === totalRounds){
        endGame();
    }
}

function endGame() {
    let gameMessage;

    if(humanScore > computerScore){
        gameMessage = "Game Over! You are the Winner!";
    }else if(computerScore > humanScore){
        gameMessage = "Game Over! Computer is the winner!";
    }else {
        gameMessage = "Game Over! It's a Tie!";
    }
    winnerDisplay.textContent = gameMessage;
}