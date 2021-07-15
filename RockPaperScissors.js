const score = new Proxy({}, {
    set: (target, property, value) => {
        target[property] = value;
        updateRender(property, value);
    }
});

function updateRender(property, value) {
    document.querySelector(`[data-binding="${property}"]`)
        .innerText = value;
}

function updateScore(playerWon) {
    if (playerWon === 1) {
        score['p-score'] += 1;
    }
    else if (playerWon === -1) {
        score['c-score'] += 1;
    }
}

function computerPlay() {
    const hand = ['rock', 'paper', 'scissors'];
    const rand = Math.floor(Math.random() * hand.length);
    return hand[rand];
}

function displayResult(result) {
    document.querySelector('#result').innerText = result;
}

function getFinalResult() {
    /**
     * check scores
     *  if player is 5 you win
     *  if computer is 5 you lose
     */
    const winner = 'You are the winner! Congratulations!';
    const loser = 'Computer is the winner! You suck!';
    return score['p-score'] === 5 ? winner : loser;
}

function endGame() {
    /**
     * How to end the game:
     *  1. Hide player controller
     *  2. Display Winner message
     *  3. Reset button
     */
    setControllerDisplay();
    displayResult(getFinalResult());
}

function playRound() {
    let result = '';
    let playerWon = 0;

    const playerSelection = this.id;
    const computerSelection = computerPlay();

    if(playerSelection === computerSelection){
        result = 'Draw!'
    } 
    else if (playerSelection === 'rock'){
        if (computerSelection === 'paper') { result = 'You Lose! Paper beats Rock'; playerWon = -1; }
        else { result = 'You Win! Rock beats Scissors'; playerWon = 1; }
    }
    else if (playerSelection === 'paper'){
        if (computerSelection === 'scissors') {result = 'You Lose! Scissors beats Paper'; playerWon = -1; }
        else { result = 'You win! Paper beats Rock'; playerWon = 1; }
    }
    else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock') { result = 'You lose! Rock beats Scissors'; playerWon = -1; }
        else { result = 'You win! Scissors beats Paper'; playerWon = 1; }
    }
    else {
        result = '!ERROR! - Invalid input';
        playerWon = -666;
    }

    updateScore(playerWon);
    displayResult(result);

    // End the game if someone scores 5
    if (score['p-score'] === 5 || score['c-score'] === 5) {
        endGame();
    }
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

function toggleDisplayClass(el) {
    el.classList.toggle('disabled-el');
}

function setControllerDisplay(value = 'none') {
    document.querySelector('#selection-container').style.display = value;
}

function startClicked(e) {
    toggleDisplayClass(this);
    toggleDisplayClass(document.querySelector('#game-scene'));
    startNewGame();
}

function startNewGame() {
    score['p-score'] = 0;
    score['c-score'] = 0;
    setControllerDisplay('flex');
    displayResult(`First to 5\n\nPlay your hand!`);
}

// attach event listener to the game start button
document.querySelector('#start-button').addEventListener('click', startClicked);

// attach event listeners to the player control buttons
const playerBtns = document.querySelectorAll('.rps-buttons');
playerBtns.forEach(btn => {
    btn.addEventListener('click', playRound);
});
