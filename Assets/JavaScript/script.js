var timeEl = document.querySelector(".time-remaining");
var buttonEl = document.querySelector(".startQuiz");

$(buttonEl).on("click", function () {
    setTime();
    hideContent1();
});

// below was "var secondsLeft = 150" but has changed only to make modification simplified.  
var secondsLeft = 150;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "";
    alert("Time has run out!");
}

var content1 = document.querySelector(".content1");
var content2 = document.querySelector(".content2");

function hideContent1() {
    content1.style.display = "none";
    content2.style.display = "block";
}

/* Code for Getting and Setting HighScores with "highScores.html" */

/* Initializing the "input#initialsInput" Object */
var initialsInput = document.querySelector("#initialsInput");
console.log(initialsInput);
/* Initializing the "button#submitButton" Object */
var submitButton = document.querySelector("#submitButton");
console.log(submitButton);
var highScore1Span = document.querySelector("#highScore1");
var highScore2Span = document.querySelector("#highScore2");
var highScore3Span = document.querySelector("#highScore3");
var highScore4Span = document.querySelector("#highScore4");


renderLastRegistered();

/* Initializing function renderLastRegistered() {...}; */

// Getting the High Scores

function renderLastRegistered() {
    var initials = localStorage.getItem("initials");
    var score = localStorage.getItem("score");

    if (initials && endingScore === null) {
        return;
    }
    highScore1Span.textContent
    highScore2Span.textContent 
    highScore3Span.textContent 
    highScore4Span.textContent 
}

/* Setting up the "button#submitButton" to create Form Submission */

/* "click" Event */
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target);
    var initials = document.querySelector("#initialsInput").value;
    console.log(initials);
    var endingScore = secondsLeft;
    console.log(endingScore);

    // Validating User Input 
    if (initialsInput === "") {
        displayMessage("error", "You must enter your initials.");
    } else {
        displayMessage("success", "Registered Successfully");
    }

    // Setting the Local Storage
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", endingScore);
});




/*
/* creating user Object from submission From Example 23 */
/*
var user = {
    initials: initialsInput.value.trim(),
    /* I'm using "var secondsLeft", initiall set at 50 and decremented after startButton "click" Event 
    score: secondsLeft

};
*/







/* Code For highScores.html, below */

/* Counter needs to decrement 15 seconds when someone clicks the wrong answer */
/*
var counter = $(".time-remaining");
counter.textContent = secondsLeft;
console.log(counter);
var count = localStorage.getItem("count");
console.log(count);
counter.textContent = count;

if (event.target.parentElement.textContent !== questions[i].answer) {
    count - 15;
}
/*

/*
var currentEndingScore = secondsLeft;
console.log(currentEndingScore);
$("#currentEndingScore").text(currentEndingScore);
*/

