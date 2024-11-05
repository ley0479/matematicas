const questions = [
    { question: "Una función compleja es una función cuyo dominio y rango están en el conjunto de los números complejos.", answer: true },
    { question: "Para que una función compleja sea diferenciable, debe cumplir la condición de Cauchy-Riemann.", answer: true },
    { question: "El conjunto de los números reales es suficiente para representar funciones complejas.", answer: false },
    { question: "La derivada de una función compleja es similar a la derivada en cálculo real, pero con ciertas restricciones adicionales.", answer: true },
    { question: "La función exponencial compleja, e^z, se define de la misma manera que la función exponencial real.", answer: true },
    { question: "Una función compleja no puede ser continua.", answer: false },
    { question: "En funciones complejas, el concepto de límite es idéntico al del cálculo en el plano real.", answer: false },
    { question: "La transformada de Laplace es una aplicación importante de las funciones complejas.", answer: true },
    { question: "El número imaginario i cumple con la propiedad de que i^2 = 1.", answer: false },
    { question: "Las funciones complejas tienen aplicaciones en el análisis de circuitos eléctricos y la física cuántica.", answer: true },
    { question: "Una función analítica compleja es diferenciable en un solo punto de su dominio.", answer: false },
    { question: "La integral de una función compleja puede ser evaluada utilizando el teorema de Cauchy.", answer: true },
    { question: "Las funciones holomorfas son aquellas que son diferenciables en todas partes de su dominio.", answer: true },
    { question: "El teorema de Liouville afirma que cualquier función compleja acotada y entera es constante.", answer: true },
    { question: "Una función compleja con singularidades no puede ser diferenciable en todo su dominio.", answer: true }
];

let score = 0;
let level = 1;
let currentQuestion = 0;
let timeLeft = 10;
let timerInterval;

function startGame() {
    score = 0;
    level = 1;
    currentQuestion = 0;
    timeLeft = 10;
    document.getElementById("score").innerText = `Puntos: ${score}`;
    document.getElementById("level").innerText = `Nivel: ${level}`;
    document.getElementById("startButton").disabled = true;
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        alert("¡Felicidades! Has completado todas las preguntas.");
        resetGame();
        return;
    }
    document.getElementById("question").innerText = questions[currentQuestion].question;
}

function checkAnswer(userAnswer) {
    if (questions[currentQuestion].answer === userAnswer) {
        score += 10;
        document.getElementById("score").innerText = `Puntos: ${score}`;
        if (score % 30 === 0) {
            level++;
            document.getElementById("level").innerText = `Nivel: ${level}`;
        }
    }
    currentQuestion++;
    loadQuestion();
    resetTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `${timeLeft}s`;
        if (timeLeft <= 0) {
            alert("¡Se acabó el tiempo! Pregunta incorrecta.");
            currentQuestion++;
            loadQuestion();
            resetTimer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    document.getElementById("timer").innerText = `${timeLeft}s`;
    startTimer();
}

function resetGame() {
    clearInterval(timerInterval);
    document.getElementById("question").innerText = "Haz clic en 'Iniciar Juego' para comenzar.";
    document.getElementById("timer").innerText = "10s";
    document.getElementById("startButton").disabled = false;
}
