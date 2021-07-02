function computerPlay() {
    const hand = ['Rock', 'Paper', 'Scissors'];
    const rand = Math.floor(Math.random() * hand.length);
    return hand[rand];
}

