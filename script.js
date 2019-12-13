// game values
let min = 1,
    max = 10,
    winningNum = 7,
    guessLeft = 3;
// ==================================================== //
// UI elements
const game = document.querySelector('.game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('.guess-input'),
    guessBtn = document.querySelector('.guess-btn'),
    message = document.querySelector('.msg');
// ==================================================== //
// Assign min & max number
minNum.textContent = min;
maxNum.textContent = max;
// ==================================================== //
// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    // check is inputed guess match the rule
    if (isNaN(guess) || guess > max || guess < min) {
        guessInput.style.borderColor = 'red';
        setMessage(`Please insert number between ${min} and ${max}`, 'red');
    }
    // check is won
    if (winningNum === guess) {
        // game over win
        guessInput.disabled = true;
        guessInput.style.backgroundColor = '#cecece';
        setMessage(`${guess} is Correct, YOU WON!`, 'green');
    } else {
        guessInput.style.borderColor = 'red';
        guessLeft -= 1;
        if (guessLeft === 0) {
            // game over lost
            guessInput.disabled = true;
            guessInput.style.backgroundColor = '#cecece';
            setMessage(`Your guess left ${guessLeft}, Game Over! You Lost.`, 'red')
        } else {
            setMessage(`${guess} is incorrect, your guess left ${guessLeft}`, 'red');
        }
    }
});
// set Message
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}