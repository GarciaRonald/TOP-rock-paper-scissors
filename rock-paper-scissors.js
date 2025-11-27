let humanScore = 0;
let computerScore = 0;

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

// Human choice, return user input
const getHumanChoice = () => prompt('Enter Rock, Paper or Scissors:', 'Rock');

// Play round, based on computer and human choice
const playRound = (humanChoice, computerChoice) => {
    let lowerCaseHumanChoice = humanChoice.toLowerCase();

    if (lowerCaseHumanChoice === 'rock') {
        if (computerChoice === 'Paper') {
            console.log('Computer wins! Paper beats Rock');
        } else if (computerChoice === 'Scissors') {
            console.log('You win! Rock beats Scissors');
        } else {
            console.log('Tied! Both chose Rock');
        }
    } else if (lowerCaseHumanChoice === 'paper') {
        if (computerChoice === 'Rock') {
            console.log('You win! Paper beats Rock');
        } else if (computerChoice === 'Scissors') {
            console.log('You lose! Scissors beat Paper');
        } else {
            console.log('Tied! Both chose Paper');
        }
    } else if (lowerCaseHumanChoice === 'scissors') {
        if (computerChoice === 'Rock') {
            console.log('You lose! Rock beats Scissors');
        } else if (computerChoice === 'Paper') {
            console.log('You win! Scissors beat Paper');
        } else {
            console.log('Tied! Both chose Scissors');
        }
    }
};

// Test functions
// console.log('Test getComputerChoice():', getComputerChoice());
// console.log('Test getHumanChoice():', getHumanChoice()); 
// console.log('Test playRound:', playRound(getHumanChoice()), getComputerChoice());