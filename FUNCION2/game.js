let currentQuestionIndex = 0;
let timerInterval;
let timeRemaining = 10; // 10 segundos por pregunta
let maxTime = 10;

// Preguntas de lógica
const questions = [
    { question: "Si Ana tiene 4 manzanas y le da 2 a Pedro, ¿cuántas le quedan?", options: ["2", "4", "6"], answer: "2" },
    { question: "Si un tren sale de la estación A a las 2 pm y tarda 3 horas, ¿a qué hora llegará?", options: ["5 pm", "4 pm", "6 pm"], answer: "5 pm" },
    { question: "Si en un saco hay 6 pelotas y saco 3, ¿cuántas quedan?", options: ["3", "6", "0"], answer: "3" },
    { question: "Si un reloj tiene 12 horas y son las 10, ¿cuánto falta para la 1?", options: ["3 horas", "2 horas", "1 hora"], answer: "3 horas" }
];

// Iniciar el juego
function startGame() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("labyrinth-screen").style.display = "block";
    currentQuestionIndex = 0;
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

    resetTimerBar();
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
    } else {
        endGame();
    }
}

// Temporizador con barra de progreso
function startTimer() {
    clearInterval(timerInterval);
    timeRemaining = maxTime;
    updateTimerBar();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerBar();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Tiempo agotado en esta pregunta.");
            endGame();
        }
    }, 1000);
}

// Actualizar la barra de progreso del temporizador
function updateTimerBar() {
    const timerBarInner = document.getElementById("timer-bar-inner");
    const widthPercentage = (timeRemaining / maxTime) * 100;
    timerBarInner.style.width = widthPercentage + "%";
    timerBarInner.style.backgroundColor = widthPercentage > 50 ? "green" : "red";
}

// Reiniciar la barra de progreso para la nueva pregunta
function resetTimerBar() {
    clearInterval(timerInterval);
    startTimer();
}

// Terminar el juego
function endGame() {
    clearInterval(timerInterval);
    document.getElementById("labyrinth-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    document.getElementById("final-time").textContent = maxTime * questions.length - timeRemaining;
}

// Reiniciar el juego
function restartGame() {
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("welcome-screen").style.display = "block";
}
