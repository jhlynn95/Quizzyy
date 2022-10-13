var home = document.getElementById('home')
var questions = document.getElementById('game')
var game = document.getElementById('game-over')
var questionNumber = document.getElementById('text')
var question = document.getElementById('question')
var answerOptions = document.getElementById('options-container')
var timeEl = document.querySelector('#time');
var scores = document.querySelector('#scores-btn')
var score = 4
var scoreEl = document.querySelector('#scoreCount')
var maxQuestions = 4
var secondsLeft = 50
var questionCounter = 0
var gameQuestions = [ 
    {
        question: "What is Javacript?",
        answers: ['A. HTML ','B. programming language ','C. website language','D. alt to CSS'],
        answer: 'B. programming language',
    }, 
    {
        question: "What does a function do?",
        answers: ['A. calls classes','B. links java to html','C. does a function','D. performs a task'],
        answer: 'D. performs a task',
    }, 
    {
        question: "What does an eventlistener do?",
        answers: ['A. to listen to your problems','B. listen to events','C. waits for an event to occur','D. all of above'],
        answer: 'C. waits for an event to occur',
    }, 
    {
        question: "Do you like grading work?",
        answers: ['A. Absolutely','B. Meh','C. Never','D. what kind of question is this?'],
        answer: 'A. Absolutely',
    }, 
    
]

var btns  = {
    btn1: document.getElementById('btn1'),
    btn2: document.getElementById('btn2'),
    btn3: document.getElementById('btn3'),
    btn4: document.getElementById('btn4'),
};



var currentQuestionIndex = Math.floor(Math.random() * gameQuestions.length);



function displayQuestion() {
    // generates a loop of the questions to be always random
    var loop = 0
    currentQuestionIndex = Math.floor(Math.random() * gameQuestions.length)
    questionNumber.textContent= ' Question ' +(currentQuestionIndex)
    question.textContent= gameQuestions[currentQuestionIndex].question
    Object.values(btns).forEach(val => {
        val.textContent = gameQuestions[currentQuestionIndex].answers[loop];
        loop++;
    
    });
}

function setTime() {
    // sets timer for the player
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {        
        clearInterval(timerInterval);
        // sendMessage();
      }
  
    }, 1000);

    // function answersOptions() {
    // if (answers === [answer]){
    //     scoreCount += 25;
    //     score.innerHTML = scoreCount;
    //     totalScore.innerHTML = scoreCount;
    // }else{
    //     scoreCount -= 25;
    //     score.innerHTML = scoreCount;
    //     totalScore.innerHTML = scoreCount;
    // }
  }
  
function startQuiz() {
    // hides home contents
    home.style.display="none"
    answerOptions.textContent.display="hide"
    questions.style.display="block"
    displayQuestion(gameQuestions)
    setTime();
    questionCounter = 0
    score = 0
    if (gameQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('previous scores', score);

       

        return
    }

    questionCounter++
    // progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`
};

document.getElementById('start-btn').addEventListener('click', startQuiz)
// document.getElementById('scores-btn').addEventListener('click', scorelist)
Object.values(btns).forEach(val => {
    val.addEventListener("click", (event) => {
        event.preventDefault();
        
    // keeps tract of score
        if (gameQuestions[currentQuestionIndex].answer == event.target.innerText){
            score++
            scoreEl.textContent = "score; " + score


            console.log('youre correct')
            gameQuestions.splice(currentQuestionIndex,1)
            displayQuestion()
            }
            else{ 
                gameQuestions.splice(currentQuestionIndex,1)
                displayQuestion()
            }
        // innerTextOutput.gameQuestions.value = source.innerText;
    })
});

function gameOver() {
    game.style.display = "contents"
    
}