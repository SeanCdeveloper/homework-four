var questions = 
[{title: "Which CSS Style Rule will make an Element disappear?", choices: ["display: disappear;", "display: block;", "display: none;", "invisible: true;"], answer: "display: none;" }, 
{title: "Which of the following is not a 'Global Object'?", choices: ["Array", "String", "Window", "textContent()"], answer: "textContent()"}, 
{title:"Which of the following is not a JavaScript Event?", choices: ["hover", "click", "change", "modify"], answer: "modify"}, 
{title: "What is the jQuery Method that relates to textContent() Property?", choices: ["innerHTML()", "text()", "attr()", ".on()"], answer: "text()"}, 
{title: "What is 'API' an acronym for?", choices: ["Associated Press Institution", "Application Programming Institute", "Application Programming Itinerary", "Application Programming Interface"], answer: "Application Programming Interface"},
{title: "What is the method used to set an Attribute in jQuery?", choices: ["setAttribute()", "on()", "attr()", "off()" ], answer: "attr()"}, 
{title: "True or False: 'console.log' is an API?", choices: ["true", "false"], answer: "true"}, 
{title: "Which of the following would be at the top of the DOMTree?", choices: ["<body>", "document", "<html>", "<head>"], answer: "document"},
{title: "If the statement 'var value = 2' occurs inside a function, what type of variable does it declare?", choices: ["A global variable", "A local variable", "A constant variable", "An awesome variable"], answer: "A local variable"}, 
{title: "Which of the following operators means 'not equal to?'", choices: ["&&", "!==", "===", "=="], answer: "!=="},];

var pTag = document.querySelector("#title-p");
pTag.textContent = questions[0].title;
            
var liTag0 = document.querySelector("#choices-btn0");
var liTag1 = document.querySelector("#choices-btn1");
var liTag2 = document.querySelector("#choices-btn2");
var liTag3 = document.querySelector("#choices-btn3");

liTag0.textContent = questions[0].choices[0];
liTag1.textContent = questions[0].choices[1];
liTag2.textContent = questions[0].choices[2];
liTag3.textContent = questions[0].choices[3];

var i = 0;

$("#choices-ol").on("click", function(event) {
event.preventDefault();
console.log(event.target.parentElement.textContent);
console.log(event.target.getAttribute("id"));
if (event.target.parentElement.textContent === questions[i].answer) {
var correctAnswer = alert("Correct");
} else {
var incorrectAnswer = alert("Incorrect: 15 seconds will be subtracted from Timer.");
secondsLeft = secondsLeft - 15;
}
/*New Stuff, below***/
if (pTag.textContent[i] !== undefined) {
switchToNextQuestion();
} else {
  console.log("switch");
}
});

function switchToNextQuestion() {
i++;
pTag.textContent = questions[i].title;
liTag0.textContent = questions[i].choices[0];
liTag1.textContent = questions[i].choices[1];
liTag2.textContent = questions[i].choices[2];
liTag3.textContent = questions[i].choices[3]; 
}











