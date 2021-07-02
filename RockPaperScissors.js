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
