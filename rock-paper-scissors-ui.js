const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const roundNum = document.querySelector('#round span');
const humanScore = document.querySelector('#human-score span');
const compuScore = document.querySelector('#computer-score span');
// const winner = document.querySelector('#results-msg span');

const playRound = (humanChoice, computerChoice) => {
    let lowerCaseHumanChoice = humanChoice.toLowerCase();

    if (lowerCaseHumanChoice === 'rock') {
        if (computerChoice === 'Paper') {
            // computerScore++;
            console.log('Computer wins! Paper beats Rock');
        } else if (computerChoice === 'Scissors') {
            // humanScore++;
            console.log('You win! Rock beats Scissors');
        } else {
            // humanScore++;
            // computerScore++;
            console.log('Tied! Both chose Rock');
        }
    } else if (lowerCaseHumanChoice === 'paper') {
        if (computerChoice === 'Rock') {
            // humanScore++;
            console.log('You win! Paper beats Rock');
        } else if (computerChoice === 'Scissors') {
            // computerScore++;
            console.log('You lose! Scissors beat Paper');
        } else {
            // humanScore++;
            // computerScore++;
            console.log('Tied! Both chose Paper');
        }
    } else if (lowerCaseHumanChoice === 'scissors') {
        if (computerChoice === 'Rock') {
            // computerScore++;
            console.log('You lose! Rock beats Scissors');
        } else if (computerChoice === 'Paper') {
            // humanScore++;
            console.log('You win! Scissors beat Paper');
        } else {
            // humanScore++;
            // computerScore++;
            console.log('Tied! Both chose Scissors');
        }
    }
};

// Computer choice, return rock/paper/scissors based on random number
const getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * 3) + 1;

    if (randNum === 1) {
        return 'Rock';
    } else if (randNum === 2) {
        return 'Paper';
    } else if (randNum === 3) {
        return 'Scissors';
    }
};

const handleClick = e => {
    roundNum.textContent = Number(roundNum.textContent) + 1;

    if (roundNum.textContent > 5) {
        alert('Starting a new Game!');  // NEED TO DISPLAY WINNER
        roundNum.textContent = 0;
        humanScore.textContent = 0;
        compuScore.textContent = 0;
    } else {
        playRound(e.target.id, getComputerChoice());
    }
};

btnRock.addEventListener('click', handleClick);
btnPaper.addEventListener('click', handleClick);
btnScissors.addEventListener('click', handleClick);