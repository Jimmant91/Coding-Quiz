var timerEl = document.getElementById('timer');
var startButton = document.getElementById('start');
var container = document.getElementById('container')

var answerPlaceholders = {
    a: '',
    b: '',
    c: '',
    d: ''
}

quizQuestions = [
    {
        question: "Commonly used Data Types do not include:",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
        correctAnswer: "c"
    },

    {
        question: "The condition in an if/else statement is enclosed within _______.",
        a: "Quotes",
        b: "Curly brackets",
        c: "Parenthesis",
        d: "Square brackets",
        correctAnswer: "c"
    },

    {
        question: "Arrays in JavaScript can be used to store _____.",
        a: "Numbers and strings",
        b: "Other arrays",
        c: "Booleans",
        d: "All of the above",
        correctAnswer: "d"
    },

    {
        question: "String Values must be enclosed within _____ when being assigned to variables.",
        a: "Commas",
        b: "Curly brackets",
        c: "Quotes",
        d: "Parenthesis",
        correctAnswer: "c"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "Terminal/bash",
        c: "For loops",
        d: "Console.log",
        correctAnswer: "d"
    }
]

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

// Possible code for changing div for each section of question/answers
function askQuestion() {
    document.createElement("h1");
    h1.textContent("hello there")

}

// Setting the timer to only run on Start click
start.addEventListener('click', () => {
    countdown();
    container.innerHTML = "";
    askQuestion();
});

// Theoretical coding process
// 1. Clicking start begins timer and moves to first question
// 2. Use a for loop to loop through questions and answers
// 3. When selecting an answer, compare clicked answer to true answer, move to next question
// 3b. If incorrect answer is clicked, subtract 10 seconds, move to next question
// 4. After last question is answered, game is over
// 4b. If timer runs out, game is over
// 5. Store final score and initials to scoreboard (final score will always be equal to time remaining)