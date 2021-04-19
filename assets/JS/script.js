var timerEl = document.getElementById('timer');
var startButton = document.getElementById('start');

function countdown() {
    var timeLeft = 75;
    
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = "Timer: " + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to 'Time is up!'
        timerEl.textContent = 'Time is up!';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        }
    }, 1000);
}

// Setting the timer to only run on Start click //
start.addEventListener('click', countdown)