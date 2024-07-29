// Quiz questions
const questions = [
    {
        question: "What is JavaScript?",
        choices: ["A programming language", "A markup language", "A styling language", "A database"],
        answer: 0
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: ["var", "let", "const", "All of the above"],
        answer: 3
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
        answer: 1
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        choices: ["last()", "get()", "pop()", "None of the above"],
        answer: 2
    },
    {
        question: "Which of the following is not a valid JavaScript data type?",
        choices: ["number", "string", "boolean", "float"],
        answer: 3
    }
];

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const highScoresScreen = document.getElementById('high-scores');
const startBtn = document.getElementById('start-btn');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const timerEl = document.getElementById('time');
const finalScoreEl = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const scoreForm = document.getElementById('score-form');
const scoreList = document.getElementById('score-list');
const backBtn = document.getElementById('back-btn');
const clearBtn = document.getElementById('clear-btn');

// Quiz variables
let currentQuestionIndex = 0;
let time = 60;
let timerId;

// Event listeners
startBtn.addEventListener('click', startQuiz);
choicesEl.addEventListener('click', checkAnswer);
scoreForm.addEventListener('submit', saveScore);
backBtn.addEventListener('click', showStartScreen);
clearBtn.addEventListener('click', clearHighScores);

// Start the quiz
function startQuiz() {
    startScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    timerId = setInterval(updateTimer, 1000);
    showQuestion();
}

// Show a question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionEl.textContent = question.question;
    choicesEl.innerHTML = '';
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.dataset.index = index;
        choicesEl.appendChild(button);
    });
}

// Check the answer
function checkAnswer(event) {
    if (event.target.matches('button')) {
        const selectedAnswer = parseInt(event.target.dataset.index);
        const correct = selectedAnswer === questions[currentQuestionIndex].answer;

        if (!correct) {
            time -= 10;
            if (time < 0) time = 0;
            timerEl.textContent = time;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }
}

// Update the timer
function updateTimer() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}

// End the quiz
function endQuiz() {
    clearInterval(timerId);
    quizScreen.classList.add('hide');
    endScreen.classList.remove('hide');
    finalScoreEl.textContent = time;
}

// Save the score
function saveScore(event) {
    event.preventDefault();
    const initials = initialsInput.value.toUpperCase();
    const score = time;

    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push({ initials, score });
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem('highScores', JSON.stringify(highScores));

    showHighScores();
}

// Show high scores
function showHighScores() {
    endScreen.classList.add('hide');
    highScoresScreen.classList.remove('hide');

    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    scoreList.innerHTML = highScores
        .map(score => `<li>${score.initials} - ${score.score}</li>`)
        .join('');
}

// Show start screen
function showStartScreen() {
    highScoresScreen.classList.add('hide');
    startScreen.classList.remove('hide');
    currentQuestionIndex = 0;
    time = 60;
    timerEl.textContent = time;
}

// Clear high scores
function clearHighScores() {
    localStorage.removeItem('highScores');
    scoreList.innerHTML = '';
}