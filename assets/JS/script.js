var timerEl = document.getElementById('timer');
var startButton = document.getElementById('start');

var answerPlaceholders = {
    a: '',
    b: '',
    c: '',
    d: ''
}

// Slide 2
// Question #1
// Commonly used Data Types do not include:
// 1.Strings
// 2.Booleans
// 3. Alerts
// 4. Numbers

// Slide 3
// Question #2
// The condition in an if/else statement is enclosed within _______.
// 1.      Quotes
// 2.      Curly brackets
// 3.      Parenthesis
// 4.      Square brackets

// Slide 4
// Question #3
// Arrays in JavaScript can be used to store _____.
// 1.      Numbers and strings
// 2.      Other arrays
// 3.      Booleans
// 4.      All the above
 
// Slide 5
// Question #4
// String values must be enclosed within _______
// when being assigned to variables.
// 1.      Commas
// 2.      Curly brackets
// 3.      Quotes
// 4.      Parenthesis

// Slide 6
// Question #5
// A very useful tool used during development
// and debugging for printing content to the
// debugger is:
// 1.      JavaScript
// 2.      Terminal/bash
// 3.      For loops
// 4.      Console.log

// Slide 7
// All done!
// Your final score is ___.
// Enter initials: _____             Submit Button

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

function askQuestion(queryObject) {
    var question = document.createElement('h1');
    question.setAttribute("class", "question");
    question.textcontent = queryObject.question;
    content.appendChild(question);

    var answers = Object.entries(queryObject.answers);
}

// Setting the timer to only run on Start click //
start.addEventListener('click', () => {
    countdown();
    askQuestion(queryObject);
});