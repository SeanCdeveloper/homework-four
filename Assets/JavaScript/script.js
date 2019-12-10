var timeEl = document.querySelector(".time-remaining");
var buttonEl = document.querySelector(".startQuiz");

$(buttonEl).on("click", function() {
    setTime();
    hideContent1();
});

var secondsLeft = 150;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent="";
}

var content1 = document.querySelector(".content1");
var content2 = document.querySelector(".content2");

function hideContent1() {
    content1.style.display = "none";
    content2.style.display = "block";
}

