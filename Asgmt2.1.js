// Function to play the dice game
function playGame() {
    // Generate 2 random numbers between 1 and 6
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of the dice
    const sum = die1 + die2;

    // Output the dice values
    document.getElementById('result').innerHTML = `Dice Roll: ${die1}, ${die2}<br>`;

    // Check game conditions
    if (sum === 7 || sum === 11) {
        document.getElementById('result').innerHTML += 'Dang it – You lose!';
    } else if (die1 === die2 && die1 % 2 === 0) {
        document.getElementById('result').innerHTML += 'You won!';
    } else {
        document.getElementById('result').innerHTML += 'You pushed!';
    }
}

// Function to demonstrate taking a parameter and outputting results
function processInput(inputValue) {
    // Example processing logic
    const result = `Processing Input: ${inputValue}`;
    return result;
}
