document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
    const gameScreen = document.getElementById("game-screen");
    const answersContainer = document.getElementById("answers-container");
    const resultMessage = document.getElementById("result-message");
    const nextQuestionButton = document.getElementById("next-question");
    const progressInner = document.getElementById("progress-inner");

    let questionIndex = 0;
    let correctAnswers = 0;

    const questions = [
        {
            question: "¿Qué es una sucesión compleja?",
            answers: [
                "A) Una secuencia de números reales ordenados.",
                "B) Una secuencia de números complejos en un orden específico.",
                "C) Una función que sólo incluye números naturales.",
                "D) Un grupo de números que se suma de forma continua."
            ],
            correct: "B) Una secuencia de números complejos en un orden específico."
        },
        // Agregar las demás preguntas aquí...
    ];

    function startGame() {
        startScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");
        questionIndex = 0;
        correctAnswers = 0;
        loadQuestion();
    }

    function loadQuestion() {
        const currentQuestion = questions[questionIndex];
        document.getElementById("question-title").innerText = `Pregunta: ${currentQuestion.question}`;
        answersContainer.innerHTML = ''; // Limpiar respuestas anteriores
        currentQuestion.answers.forEach(answer => {
            const btn = document.createElement("button");
            btn.innerText = answer;
            btn.className = "answer-btn";
            btn.onclick = () => checkAnswer(answer, currentQuestion.correct);
            answersContainer.appendChild(btn);
        });
        resultMessage.classList.add("hidden");
        nextQuestionButton.classList.add("hidden");
    }

    function checkAnswer(selectedAnswer, correctAnswer) {
        if (selectedAnswer === correctAnswer) {
            correctAnswers++;
            resultMessage.innerText = "¡Correcto! 🎉";
            resultMessage.style.color = "#28a745";
            animateConfetti();
            unlockBuilding();
        } else {
            resultMessage.innerText = `Incorrecto. La respuesta correcta es: ${correctAnswer} ❌`;
            resultMessage.style.color = "#dc3545";
        }
        resultMessage.classList.remove("hidden");
        nextQuestionButton.classList.remove("hidden");
        updateProgress();
    }

    function unlockBuilding() {
        const building = document.getElementById(`building-${correctAnswers}`);
        if (building) {
            building.classList.remove("hidden");
            building.classList.add("unlocked");
        }
    }

    function updateProgress() {
        const progress = ((questionIndex + 1) / questions.length) * 100;
        progressInner.style.width = `${progress}%`;
    }

    nextQuestionButton.onclick = () => {
        questionIndex++;
        if (questionIndex < questions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    };

    function endGame() {
        gameScreen.classList.add("hidden");
        const finalMessage = document.createElement("div");
        finalMessage.innerHTML = `<h2>Juego terminado</h2><p>Respuestas correctas: ${correctAnswers} de ${questions.length}</p>`;
        document.body.appendChild(finalMessage);
    }

    function animateConfetti() {
        for (let i = 0; i < 100; i++) {
            createConfetti();
        }
    }

    function createConfetti() {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.position = "absolute";
        confetti.style.top = Math.random() * 100 + "vh";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.transform = `translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh)`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    startButton.onclick = startGame;
});
