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

function getFinalText(score) {
    if (score > 0) {
        return "\n\nCONGRATULATIONS! YOU WIN!";
    }
    else if (score < 0) {
        return "\n\nSORRY! YOU LOSE!";
    }
    return "\n\nDRAW! BETTER LUCK NEXT TIME!";
}

function game() {
    let score = 0;
    
    for (let i = 0; i < 5; i++) {
        let result = playRound(
            prompt('Enter selection', 'Rock/Paper/Scissors'), 
            computerPlay()
        );

        console.log(result);
        
        if(result.includes('Win')){
            score = score + 1;
        } else if (result.includes('Lose')){
            score = score - 1;
        }
    }

    console.log(getFinalText(score));
    console.log("SCORE: " + score);
}

game();
