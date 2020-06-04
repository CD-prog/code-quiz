var timer = document.getElementById("timer")
var info = document.getElementById("info")
var question = document.getElementById("question")
var btn1 = document.getElementById("answerBtn1")
var btn2 = document.getElementById("answerBtn2")
var btn3 = document.getElementById("answerBtn3")
var btn4 = document.getElementById("answerBtn4")
var correct = document.getElementById("Correct")
var wrong = document.getElementById("Wrong")
var HighScores = document.getElementById("HighScores")

info.style.visibility = "hidden"
startBtn.style.visibility = "visible"
question.style.visibility = "visible"
correct.style.visibility = "hidden"
wrong.style.visibility = "hidden"

var ca = 0;
var wa = 0;
let currentIndex = -1;
const questions = [
  {
    question: 'Commonly used data types DO NOT include :',
    answers: [
      { text: 'strings', correct: false },
      { text: 'booleans', correct: false },
      { text: 'alerts', correct: true },
      { text: 'numbers', correct: false },
    ]
  },
  {
    question: 'The condition in an if/else statement is enclosed with :',
    answers: [
      { text: 'quotes', correct: false },
      { text: 'curly brackets', correct: false },
      { text: 'parentheses', correct: true },
      { text: 'square brackets', correct: false }
    ]
  },
  {
    question: 'Arrays in JavaScript can be used to store',
    answers: [
      { text: 'numbers and strings', correct: false },
      { text: 'other arrays', correct: false },
      { text: 'booleans', correct: false },
      { text: 'all of the above', correct: true }
    ]
  },
  {
    question: '"String values must be enclosed within ____ when being assigned to variables',
    answers: [
      { text: 'commas', correct: false },
      { text: 'curly brackets', correct: false },
      { text: 'quotes', correct: true },
      { text: 'parentheses', correct: false },
    ]
  },
  {
    question: '"A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: [
      { text: 'JavaScript', correct: false },
      { text: 'terminal/bash', correct: false },
      { text: 'for loops', correct: false },
      { text: 'console.log', correct: true },
    ]
  }
]
function correctAnswer() {
  var timeLeft = 25;
  var timeInterval = setInterval(function () {
    timeLeft--;
    correct.style.visibility = "visible"

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      correct.style.visibility = "hidden"
      renderQuestion()
    }
  }, 50);
  ca++;
  HighScores.innerText = ("Correct " + ca + " Wrong " + wa)
  var total = ca + wa;
  if (total === 5) {
    info.style.visibility = "hidden"
    question.innerText = "Game Over !"

  }
}



function wrongAnswer() {
  var timeLeft = 25;
  var timeInterval = setInterval(function () {
    timeLeft--;
    wrong.style.visibility = "visible"

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      wrong.style.visibility = "hidden"
      renderQuestion()
    }
  }, 50);
  wa++;
  HighScores.innerText = ("Correct " + ca + " Wrong " + wa)
  var total = ca + wa;
  if (total === 5) {
    info.style.visibility = "hidden"
    question.innerText = "Game Over !"


  }
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

function renderQuestion() {
  currentIndex++;
  question.innerText = questions[currentIndex].question
  btn1.innerText = questions[currentIndex].answers[0].text
  btn2.innerText = questions[currentIndex].answers[1].text
  btn3.innerText = questions[currentIndex].answers[2].text
  btn4.innerText = questions[currentIndex].answers[3].text
}

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('answer-btn')) {
    // console.log('You clicked and I should do something');
    // console.log(evt.target.getAttribute('data-id'));
    var isCorrect = questions[currentIndex].answers[evt.target.getAttribute("data-id")].correct;
    if (isCorrect) {
      correctAnswer()
    } else {
      wrongAnswer();
    }
  }
});

startBtn.addEventListener("click", function () {
  info.style.visibility = "visible"
  countdown()
  renderQuestion();
  HighScores.innerText = ("Correct " + ca + " Wrong " + wa)

})


