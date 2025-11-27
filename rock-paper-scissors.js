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

// Test functions
// console.log('Test getComputerChoice():', getComputerChoice());
// console.log('Test getHumanChoice():', getHumanChoice()); 