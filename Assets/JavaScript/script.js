console.log("hello");

var timeEl = document.querySelector(".time-remaining");
var buttonEl = document.querySelector(".startQuiz");
console.log(timeEl);
console.log(buttonEl);

$(buttonEl).on("click", function() {
    setTime();
});

var secondsLeft = 100;

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