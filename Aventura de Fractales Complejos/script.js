// Variables globales
let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "¿Cuánto es 5 + 3?",
        answers: ["5", "6", "8", "10"],
        correct: 2 // Índice de la respuesta correcta
    },
    {
        question: "¿Cuál es el resultado de 6 * 7?",
        answers: ["42", "48", "36", "54"],
        correct: 0
    },
    {
        question: "¿Qué es 10 - 4?",
        answers: ["4", "6", "8", "5"],
        correct: 1
    }
];

// Elementos del DOM
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const questionTitle = document.getElementById('question-title');
const answersContainer = document.getElementById('answers-container');
const resultMessage = document.getElementById('result-message');
const nextQuestionButton = document.getElementById('next-question');
const progressInner = document.getElementById('progress-inner');
const cityContainer = document.getElementById('city-container');
const buildings = document.querySelectorAll('.building');

// Iniciar el juego
document.getElementById('start-button').addEventListener('click', startGame);
nextQuestionButton.addEventListener('click', showNextQuestion);

// Función para iniciar el juego
function startGame() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    progressInner.style.width = '0%';
    showNextQuestion();
}

// Función para mostrar la siguiente pregunta
function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionTitle.innerText = currentQuestion.question;
        answersContainer.innerHTML = '';
        currentQuestion.answers.forEach((answer, index) => {
            const answerButton = document.createElement('button');
            answerButton.innerText = answer;
            answerButton.classList.add('answer-button');
            answerButton.addEventListener('click', () => handleAnswer(index));
            answersContainer.appendChild(answerButton);
        });
        resultMessage.classList.add('hidden');
        nextQuestionButton.classList.add('hidden');
        updateProgress();
    } else {
        endGame();
    }
}

// Función para manejar la respuesta
function handleAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
        resultMessage.innerText = "¡Correcto!";
        showBuilding(currentQuestionIndex); // Mostrar edificio
    } else {
        resultMessage.innerText = "Incorrecto. Intenta de nuevo.";
    }
    resultMessage.classList.remove('hidden');
    currentQuestionIndex++;
    nextQuestionButton.classList.remove('hidden');
}

// Función para mostrar el edificio correspondiente
function showBuilding(index) {
    const building = buildings[index];
    if (building) {
        building.classList.add('visible');
    }
}

// Función para actualizar la barra de progreso
function updateProgress() {
    const progress = ((currentQuestionIndex / questions.length) * 100).toFixed(2);
    progressInner.style.width = `${progress}%`;
}

// Función para terminar el juego
function endGame() {
    gameScreen.classList.add('hidden');
    alert(`Fin del juego. Tu puntuación es: ${score} de ${questions.length}`);
}

// Inicializar la pantalla de juego
function initializeGame() {
    gameScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Llamar a la función de inicialización al cargar
window.onload = initializeGame;
