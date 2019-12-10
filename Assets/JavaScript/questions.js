var questions = 
[{title: "Which CSS Style Rule will make an Element disappear?", choices: ["display: disappear;", "display: block;", "display: none;", "visible: false;"], answer: "display: none;" }, 
{title: "Which of the following is not a 'Global Object'?", choices: ["Array", "String", "Window", "textContent()"], answer: "textContent()"}, 
{title:"Which of the following is not a JavaScript Event?", choices: ["hover", "click", "change", "modify"], answer: "modify"}, 
{title: "What is the jQuery Method that relates to textContent() Property?", choices: ["innerHTML()", "text()", "attr()", ".on()"], answer: "text()"}, 
{title: "What is 'API' an acronym for?", choices: ["Associated Press Institution", "Application Programming Institute", "Application Programming Itinerary", "Application Programming Interface"], answer: "Application Programming Interface"},
{title: "What is the method used to set an Attribute in jQuery?", choices: [".setAttribute()", ".on()", ".attr()", ".off()" ], answer: ".attr"}, 
{title: "Is 'console.log' an API?", choices: ["true", "false"], answer: "true"}, 
{title: "Which of the following would be at the top of the DOMTree?", choices: ["<body>", "document", "<html>", "<head>"], answer: "document"},
{title: "If the statement 'var value = 2' occurs inside a function, what type of variable does it declare?", choices: ["A global variable", "A local variable", "A constant variable"], answer: "local variable"}, 
{title: "Which of the following operators mean 'not equal to'", choices: ["&&", "!==", "===", "=="], answer: "!=="},];


console.log(questions[1].title);

// Looping through an Array of Objects
for (i=0; i<questions.length; i++) {
    console.log(questions[i].title + " && " + questions[i].choices);
}



/* .title is the Property for Questions being asked */
/*
console.log(questions[0].title);
console.log(questions[1].title);
console.log(questions[2].title);
console.log(questions[3].title);
console.log(questions[4].title);
console.log(questions[5].title);
console.log(questions[6].title);
console.log(questions[7].title);
console.log(questions[8].title);
console.log(questions[9].title);
*/

/* .choices is an Array, so consoling each element[i] would be: 
console.log(questions[0].choices[0]);
console.log(questions[0].choices[1]);
console.log(questions[0].choices[2]);
console.log(questions[0].choices[3]);
*/
/*
console.log(questions[1].choices);
console.log(questions[2].choices);
console.log(questions[3].choices);
console.log(questions[4].choices);
console.log(questions[5].choices);
console.log(questions[6].choices);
console.log(questions[7].choices);
console.log(questions[8].choices);
console.log(questions[9].choices);
*/
/* .answer is the Answer to Questions (.title) */
/*
console.log(questions[0].answer);
console.log(questions[1].answer);
console.log(questions[2].answer);
console.log(questions[3].answer);
console.log(questions[4].answer);
console.log(questions[5].answer);
console.log(questions[6].answer);
console.log(questions[7].answer);
console.log(questions[8].answer);
console.log(questions[9].answer);
*/


/* The Following two blocks of code need the following HTML: 

<p id="empty-p"></p>

  <ol id="empty-ol">
      
      <li id=><button id="empty-btn0"></button></li>
      <li><button id="empty-btn1"></button></li>
      <li><button id="empty-btn2"></button></li>
      <li><button id="empty-btn3"></button></li>      
    
  </ol>
*/
/*
for (var i=0; i<questions.length; i++) {
    var liTag0 = document.querySelector("#empty-btn0");
    liTag0.textContent = questions[0].choices[0];
      var liTag1 = document.querySelector("#empty-btn1");
    liTag1.textContent = questions[0].choices[1];
    var liTag2 = document.querySelector("#empty-btn2");
    liTag2.textContent = questions[0].choices[2];
    var liTag3 = document.querySelector("#empty-btn3");
    liTag3.textContent = questions[0].choices[3];
  }
  
  for (var i=0; i<questions.length; i++) {
    var questionDisplay = document.querySelector("#empty-p");
    questionDisplay.textContent = questions[0].title;  questionDisplay.append(pTag); 
  };
*/




/*
h1Tag = $("<h1>");
olTag = $("<ol>");
liTag = $("<li>");
*/

/*
function consoleQuestions() {
    for (var i = 0; i<questions.length; i++) {
        console.log(questions[i]);
    }
}

consoleQuestions();
*/




