var timer = document.getElementById("timer")
var info = document.getElementById("info")
var question = document.getElementById("question")
var btn1 = document.getElementById("answerBtn1")
var btn2 = document.getElementById("answerBtn2")
var btn3 = document.getElementById("answerBtn3")
var btn4 = document.getElementById("answerBtn4")
var correct = document.getElementById("Correct")
var wrong = document.getElementById("Wrong")

info.style.visibility = "hidden"
startBtn.style.visibility = "visible"
question.style.visibility = "visible"
correct.style.visibility = "hidden"
wrong.style.visibility = "hidden"

var q1 = "Commonly used data types DO NOT include :"
var q1a1 = "1. strings"
var q1a2 = "2. booleans"
var q1a3 = "3. alerts"
var q1a4 = "4. numbers"

var q2 = "The condition in an if/else statement is enclosed with :"
var q2a1 = "1. quotes"
var q2a2 = "2. curly brackets"
var q2a3 = "3. parentheses"
var q2a4 = "4. square brackets"

var q3 = "Arrays in JavaScript can be used to store"
var q3a1 = "1. numbers and strings"
var q3a2 = "2. other arrays"
var q3a3 = "3. booleans"
var q3a4 = "4. all of the above"

// const questions = [
//   {
//     question: 'Commonly used data types DO NOT include :',
//     answers: [
//       { text: 'strings', correct: false },
//       { text: 'booleans', correct: false },
//       { text: 'alerts', correct: true },
//       { text: 'numbers', correct: false },
//     ]
//   }]
//   console.log(questions);
//   console.log(questions[0].answers);
//   console.log(questions[0].question);
//   console.log(questions[0].answers[0]);
//   console.log(questions[0].answers[0].text);


//   {
//     question: 'The condition in an if/else statement is enclosed with :',
//     answers: [
//       { text: 'quotes', correct: false },
//       { text: 'curly brackets', correct: false },
//       { text: 'parentheses', correct: true },
//       { text: 'square brackets', correct: false }
//     ]
//   },
//   {
//     question: 'Arrays in JavaScript can be used to store',
//     answers: [
//       { text: 'numbers and strings', correct: false },
//       { text: 'other arrays', correct: false },
//       { text: 'booleans', correct: false },
//       { text: 'all of the above', correct: true }
//     ]
//   },
//   {
//     question: '"String values must be enclosed within ____ when being assigned to variables',
//     answers: [
//       { text: 'commas', correct: false },
//       { text: 'curly brackets', correct: false },
//       { text: 'quotes', correct: true },
//       { text: 'parentheses', correct: false },
//     ]
//   },
//   {
//     question: '"A very useful tool used during development and debugging for printing content to the debugger is:',
//     answers: [
//       { text: 'JavaScript', correct: false },
//       { text: 'terminal/bash', correct: false },
//       { text: 'for loops', correct: false },
//       { text: 'console.log', correct: true },
//     ]
//   }
// ]






// function nextQuestion(){
//var q = ["question1","question2","question3","question4","question5"];
//   var a = ["ans1","ans2","ans3","ans4"];
//   for (var i=0; i<q.length; i++){
//         question.innerText=q[i]


//   }
//  }







function correctAnswer() {
  var timeLeft = 25;
  var timeInterval = setInterval(function () {
    timeLeft--;
    correct.style.visibility = "visible"

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      correct.style.visibility = "hidden"
    }
  }, 50)
}


function wrongAnswer() {
  var timeLeft = 25;
  var timeInterval = setInterval(function () {
    timeLeft--;
    wrong.style.visibility = "visible"

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      wrong.style.visibility = "hidden"
    }
  }, 50)
}

function countdown() {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft + " seconds remaining";
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timer.textContent = "Your time is up!"
    }
  }, 1000)
}




startBtn.addEventListener("click", function () {
  info.style.visibility = "visible"
  startBtn.style.visibility = "hidden"
  countdown()

  question.innerText = q1
  btn1.innerText = q1a1
  btn2.innerText = q1a2
  btn3.innerText = q1a3
  btn4.innerText = q1a4

  btn1.addEventListener("click", function () {
    wrongAnswer();

    question.innerText = q2
    btn1.innerText = q2a1
    btn2.innerText = q2a2
    btn3.innerText = q2a3
    btn4.innerText = q2a4
  })

  btn2.addEventListener("click", function () {
    wrongAnswer()
    question.innerText = q2
    btn1.innerText = q2a1
    btn2.innerText = q2a2
    btn3.innerText = q2a3
    btn4.innerText = q2a4
  })

  btn3.addEventListener("click", function () {
    correctAnswer()
    question.innerText = q2
    btn1.innerText = q2a1
    btn2.innerText = q2a2
    btn3.innerText = q2a3
    btn4.innerText = q2a4
  })

  btn4.addEventListener("click", function () {
    wrongAnswer()
    question.innerText = q2
    btn1.innerText = q2a1
    btn2.innerText = q2a2
    btn3.innerText = q2a3
    btn4.innerText = q2a4
  })
})


