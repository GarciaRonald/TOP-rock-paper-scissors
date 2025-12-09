const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const roundNum = document.querySelector('#round span');
const humanScore = document.querySelector('#human-score span');
const compuScore = document.querySelector('#computer-score span');
const results = document.querySelector('#results-msg span');

const playRound = (humanChoice, computerChoice) => {
    let lowerCaseHumanChoice = humanChoice.toLowerCase();

    if (lowerCaseHumanChoice === 'rock') {
        if (computerChoice === 'Paper') {
            compuScore.textContent = Number(compuScore.textContent) + 1;
            results.textContent = 'Computer wins! Paper beats Rock';
        } else if (computerChoice === 'Scissors') {
            humanScore.textContent = Number(humanScore.textContent) + 1;
            results.textContent = 'You win! Rock beats Scissors';
        } else {
            humanScore.textContent = Number(humanScore.textContent) + 1;
            compuScore.textContent = Number(compuScore.textContent) + 1;
            results.textContent = 'Tied! Both chose Rock';
        }
    } else if (lowerCaseHumanChoice === 'paper') {
        if (computerChoice === 'Rock') {
            humanScore.textContent = Number(humanScore.textContent) + 1;
            results.textContent = 'You win! Paper beats Rock';
        } else if (computerChoice === 'Scissors') {
            compuScore.textContent = Number(compuScore.textContent) + 1;
            results.textContent = 'You lose! Scissors beat Paper';
        } else {
            humanScore.textContent = Number(humanScore.textContent) + 1;
            compuScore.textContent = Number(compuScore.textContent) + 1;
            results.textContent = 'Tied! Both chose Paper';
        }
    } else if (lowerCaseHumanChoice === 'scissors') {
        if (computerChoice === 'Rock') {
            compuScore.textContent = Number(compuScore.textContent) + 1;
            results.textContent = 'You lose! Rock beats Scissors';
        } else if (computerChoice === 'Paper') {
            humanScore.textContent = Number(humanScore.textContent) + 1;
            results.textContent = 'You win! Scissors beat Paper';
        } else {
            humanScore.textContent = Number(humanScore.textContent) + 1;
            compuScore.textContent = Number(compuScore.textContent) + 1;
            results.textContent = 'Tied! Both chose Scissors';
        }
    }
};

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
    let alertMsg = '';

    roundNum.textContent = Number(roundNum.textContent) + 1;

    if (roundNum.textContent > 5) {
        if (Number(humanScore.textContent) > Number(compuScore.textContent)) {
            alertMsg = 'You Win!';
        } else if (Number(humanScore.textContent) < Number(compuScore.textContent)) {
            alertMsg = 'Computer Wins!';
        } else {
            alertMsg = "It's a tie!";
        }

        alert(`${alertMsg} Restarting game...`);

        roundNum.textContent = 0;
        humanScore.textContent = 0;
        compuScore.textContent = 0;
        results.textContent = '';
    } else {
        playRound(e.target.id, getComputerChoice());
    }
};

btnRock.addEventListener('click', handleClick);
btnPaper.addEventListener('click', handleClick);
btnScissors.addEventListener('click', handleClick);