let currentQuestionIndex = 0;
let score = 0;
let level = 1;
let timeLeft = 60;
let timer;
const questions = [
    // Aquí agrega las preguntas de cada nivel
];

// Configuración de puntos por nivel
const levels = {
    1: { questions: 5, points: 10, minScore: 30 },
    2: { questions: 10, points: 15, minScore: 100 },
    3: { questions: 15, points: 20, minScore: 200 }
};

function startGame() {
    // Resetea el juego
    score = 0;
    level = 1;
    currentQuestionIndex = 0;
    loadQuestion();
    startTimer();
    updateLevelInfo();
}

function startTimer() {
    timeLeft = 60;
    timer = setInterval(() => {
        document.getElementById('time-left').innerText = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            handleIncorrectAnswer();
        }
    }, 1000);
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.text;
    document.getElementById('options').innerHTML = question.options.map((option, index) => `
        <button onclick="submitAnswer(${index})">${option}</button>
    `).join('');
}

function submitAnswer(selectedIndex) {
    clearInterval(timer);
    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById('answer-feedback');
    if (selectedIndex === question.correctIndex) {
        score += levels[level].points;
        feedback.innerText = "¡Correcto!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `Incorrecto. La respuesta correcta era ${question.options[question.correctIndex]}.`;
        feedback.style.color = "red";
    }
    currentQuestionIndex++;
    checkLevelCompletion();
}

function checkLevelCompletion() {
    if (currentQuestionIndex >= levels[level].questions) {
        endLevel();
    } else {
        loadQuestion();
        startTimer();
    }
}

function endLevel() {
    const feedback = document.getElementById('end-level-feedback');
    const levelStatus = document.getElementById('level-status');
    const instructions = document.getElementById('next-level-instructions');
    feedback.style.display = "block";
    if (score >= levels[level].minScore) {
        levelStatus.innerText = "¡Felicidades! Has avanzado al siguiente nivel.";
        instructions.innerText = `Presiona para comenzar el Nivel ${level + 1}`;
        level++;
        currentQuestionIndex = 0;
    } else {
        levelStatus.innerText = "No alcanzaste la puntuación mínima. Intenta el nivel nuevamente.";
        instructions.innerText = `Presiona para reintentar el Nivel ${level}`;
    }
}

function updateLevelInfo() {
    document.getElementById('current-level').innerText = level;
    document.getElementById('score').innerText = score;
}

// Función para iniciar el juego al cargar la página
window.onload = startGame;
