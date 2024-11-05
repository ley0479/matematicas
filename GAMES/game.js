// Variables de juego
let currentQuestionIndex = 0;
let startTime;
let timerInterval;
let timeElapsed = 0;
let timerWidth = 100;

// Preguntas sobre lógica y números complejos
const questions = [
    { question: "¿Cuál es la suma de (2 + 3i) y (4 + 2i)?", options: ["6 + 5i", "5 + 5i", "6 + 6i"], answer: "6 + 5i" },
    { question: "¿Cuál es el resultado de (5 + 3i) - (2 + 4i)?", options: ["3 + i", "7 + i", "3 - i"], answer: "3 - i" },
    { question: "¿Cuál es el producto de (3 + 2i) y (1 + i)?", options: ["1 + 5i", "-1 + 5i", "-2 + 5i"], answer: "-1 + 5i" },
    { question: "¿Cuál es el cociente de (4 + 2i) / (1 + i)?", options: ["3 - i", "3 + i", "2 - i"], answer: "3 - i" }
];

// Iniciar el juego
function startGame() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("labyrinth-screen").style.display = "block";
    startTime = Date.now();
    startTimer();
    loadQuestion();
}

// Cargar pregunta
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

// Verificar respuesta
function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        nextQuestion();
    } else {
        alert("Respuesta incorrecta, ¡inténtalo de nuevo!");
    }
}

// Avanzar a la siguiente pregunta
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        resetTimerBar();
    } else {
        endGame();
    }
}

// Temporizador con barra de progreso
function startTimer() {
    timerInterval = setInterval(() => {
        timeElapsed = Math.floor((Date.now() - startTime) / 1000);
        timerWidth -= (100 / questions.length); // Ajusta el tamaño de la barra según la cantidad de preguntas
        document.getElementById("timer-bar-inner").style.width = `${timerWidth}%`;
        if (timerWidth <= 0) {
            alert("Tiempo agotado en esta pregunta.");
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// Reiniciar la barra de progreso
function resetTimerBar() {
    timerWidth = 100;
    document.getElementById("timer-bar-inner").style.width = "100%";
}

// Terminar el juego
function endGame() {
    clearInterval(timerInterval);
    document.getElementById("labyrinth-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    document.getElementById("final-time").textContent = timeElapsed;
}

// Reiniciar el juego
function restartGame() {
    currentQuestionIndex = 0;
    timeElapsed = 0;
    timerWidth = 100;
    document.getElementById("welcome-screen").style.display = "block";
    document.getElementById("labyrinth-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "none";
}
