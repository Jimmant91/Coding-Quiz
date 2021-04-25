let timeLeft;
let timeInterval;

function startCountdown() {
    timeLeft = 75;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
        
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = "Timer: " + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;

        if (timeLeft < 1) {
            // Once `timeLeft` gets to 0, set `timerEl` to 'Time is up!'
            timerEl.textContent = 'Time is up!';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
        }

    }, 1000);
}