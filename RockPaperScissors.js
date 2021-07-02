function normaliseInput(playerSelection){
    playerSelection = playerSelection.toLowerCase();

    return playerSelection
        .charAt(0)
        .toUpperCase()
        + playerSelection.slice(1);
}

function computerPlay() {
    const hand = ['Rock', 'Paper', 'Scissors'];
    const rand = Math.floor(Math.random() * hand.length);
    return hand[rand];
}

function playRound(playerSelection, computerSelection) {
    let result = 'No!';
    playerSelection = normaliseInput(playerSelection);

    if(playerSelection === computerSelection){
        result = 'Draw!'
    } 
    else if (playerSelection === 'Rock'){
        if (computerSelection === 'Paper') { result = 'You Lose! Paper beats Rock'; }
        else { result = 'You Win! Rock beats Scissors'; }
    }
    else if (playerSelection === 'Paper'){
        if (computerSelection === 'Scissors') {result = 'You Lose! Scissors beats Paper'; }
        else { result = 'You win! Paper beats Rock'; }
    }
    else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Rock') { result = 'You lose! Rock beats Scissors'; }
        else { result = 'You win! Scissors beats Paper'; }
    }
    else {
        result = '!ERROR! - Invalid input'
    }

    return result;
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();
let result = playRound(playerSelection, computerSelection);
console.log(result);