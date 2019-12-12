var timeEl = document.querySelector(".time-remaining");
var buttonEl = document.querySelector(".startQuiz");
var content1 = document.querySelector(".content1");
var content2 = document.querySelector(".content2");
var content3 = document.querySelector('.content3');
var highScoresLink = document.querySelector("#highScoreLink");

$(buttonEl).on("click", function (event) {
    setTime();
    hideContent1();
});

// below was "var secondsLeft = 150" but has changed only to make modification simplified.  
var secondsLeft = 150;
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "";
    var noTimeLeft = alert("Time has run out!"); 
    content2.style.display = "none";
    content3.style.display = "block";
}

function hideContent1() {
    content1.style.display = "none";
    content2.style.display = "block";
    content3.style.display = "none";
}

/* localStorage Section */

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

console.log(highScore1Span);
console.log(highScore2Span);
console.log(highScore3Span);
console.log(highScore4Span);

// This is the first function Call for "function renderLastRegistered()".
renderLastRegistered();

/*
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }
*/
/* Initializing function renderLastRegistered() {...}; */

// Getting the High Scores

function renderLastRegistered() {
    var initials = localStorage.getItem("initials");
    var score = localStorage.getItem("score");

    if (initials && endingScore === null) {
        return;
    }
    /*
    highScore1Span.append("")
    highScore2Span.textContent 
    highScore3Span.textContent 
    highScore4Span.textContent 
    */
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
    localStorage.setItem("score", secondsLeft);
});






