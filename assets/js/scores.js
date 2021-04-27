
var initialsEl;
function endGame () {
    
    //stop timer
    clearInterval(timeInterval)
    timerEl.style.display = "none"
    
    quizBox.classList.add("hide")
    userInitialsBox.classList.remove("hide")
    highscoresBox.classList.remove("hide")
    
    //show user's score
    score = timeLeft;

    highscoresBox.innerHTML = ""
    const highScoresEl = document.createElement("div")
    highScoresEl.textContent = "Your score is: " + score
    highscoresBox.appendChild(highScoresEl)

    //let user input initials
    userInitialsBox.innerHTML = ""
    initialsEl = document.createElement("input")
    initialsEl.setAttribute("id", "user-initials")
    userInitialsBox.appendChild(initialsEl)

    const submit = document.createElement("button")
    submit.textContent = "Submit"
    userInitialsBox.appendChild(submit)

    submit.addEventListener("click", submitScore)
}

function submitScore() {
    var inputInitials = document.querySelector("#user-initials").value;
    localStorage.setItem("initials", JSON.stringify(inputInitials)) + localStorage.setItem("score", JSON.stringify(score))
}