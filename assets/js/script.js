let quizIndex = 0
let score;

// Setting the timer to only run on Start click
startButton.addEventListener('click', () => {
    startBox.classList.add("hide")
    quizBox.classList.remove("hide")

    startCountdown();
    askQuestion();
});




// Possible code for changing div for each section of question/answers
function askQuestion() {
    if (quizIndex < quizQuestions.length) {
        quizBox.innerHTML = ""
        const questionObj = quizQuestions[quizIndex]

        const questionEl = document.createElement("div")
        questionEl.textContent = questionObj.question
        quizBox.appendChild(questionEl)

        // for(let i = 0; i < quizQuestions[quizIndex].choices.length; i++){
        //     const btn = document.createElement("button")
        //     btn.textContent = quizQuestions[quizIndex].choices[i]
        //     btn.addEventListener("click", handleChoice)
        //     quizBox.appendChild(btn)
        // }

        // for(let i = 0; i < quizObject.choices.length; i++)
        // choice === quizObject.choices[i]
        for (const choice of questionObj.choices) {             
            const btn = document.createElement("button")
            btn.textContent = choice
            btn.addEventListener("click", handleChoice)
            quizBox.appendChild(btn)
        }
    } else {
        
        endGame();
    }
}





function handleChoice(event) {
    //compare code
    let chosen = event.target.value;
    // console.log(typeof(chosen))
    if (chosen !== quizQuestions[quizIndex].correctAnswer) {
        timeLeft = timeLeft - 10;
    }
    
    quizIndex++;
    askQuestion()
    
}
   
    
    
   
    

// Theoretical coding process
// 1. Clicking start begins timer and moves to first question
// 2. Use a for loop to loop through questions and answers
// 3. When selecting an answer, compare clicked answer to true answer, move to next question
// 3b. If incorrect answer is clicked, subtract 10 seconds, move to next question
// 4. After last question is answered, game is over
// 4b. If timer runs out, game is over
// 5. Store final score and initials to scoreboard (final score will always be equal to time remaining)