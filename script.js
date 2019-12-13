// game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max);
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
// generating random winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// ==================================================== //
// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    // check is won
    if (winningNum === guess) {
        // game over win
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        guessInput.style.backgroundColor = '#dedede';
        guessBtn.value = 'Play Again';
        guessBtn.classList.add('play-again');
        setMessage(`${guess} is Correct, YOU WON!`, 'green');
    } else {
        guessInput.value = '';
        guessInput.style.borderColor = 'red';
        guessLeft -= 1;
        if (guessLeft === 0) {
            // game over lost
            guessInput.disabled = true;
            guessBtn.value = 'Play Again';
            guessBtn.classList.add('play-again');
            guessInput.style.backgroundColor = '#dedede';
            setMessage(`Your guess left ${guessLeft}, Game Over! You Lost. The Correct Number was ${winningNum}.`, 'red')
        } else {
            setMessage(`${guess} is Not Correct, your guess left ${guessLeft}`, 'red');
        }
    }
    // check is inputed guess match to the rule
    if (isNaN(guess) || guess > max || guess < min) {
        guessInput.style.borderColor = 'red';
        setMessage(`Please insert number between ${min} and ${max}, your guess left ${guessLeft}`, 'red');
    }
});
// ==================================================== //
// play again events listener
game.addEventListener('mousedown', function(e) {
    if (e.target.classList.contains('play-again')) {
        window.location.reload();
    }
});
// ==================================================== //
// set Message
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}