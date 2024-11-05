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
        {
            question: "Si una sucesión compleja está definida por \( a_n = 2n + 3i \), ¿cuál es el valor de \( a_3 \)?",
            answers: [
                "A) \( 6 + 3i \)",
                "B) \( 9 + 3i \)",
                "C) \( 7 + 9i \)",
                "D) \( 3 + 9i \)"
            ],
            correct: "B) \( 9 + 3i \)"
        },
        {
            question: "¿Cuál es el término general de la sucesión compleja \( z_n = n + i^n \) cuando \( n = 4 \)?",
            answers: [
                "A) \( 4 + 1 \)",
                "B) \( 4 + i \)",
                "C) \( 4 - 1 \)",
                "D) \( 4 + 0i \)"
            ],
            correct: "D) \( 4 + 0i \)"
        },
        {
            question: "Dada la sucesión compleja \( b_n = 3 + (-i)^n \), ¿qué tipo de valores toman los términos cuando \( n \) es par?",
            answers: [
                "A) Real positivo",
                "B) Complejo imaginario positivo",
                "C) Real negativo",
                "D) Complejo imaginario negativo"
            ],
            correct: "A) Real positivo"
        },
        {
            question: "¿Cuál es el módulo de la sucesión \( c_n = (1 + i)^n \) para \( n = 2 \)?",
            answers: [
                "A) 1",
                "B) 2",
                "C) 4",
                "D) \( \sqrt{2} \)"
            ],
            correct: "C) 4"
        },
        {
            question: "Si \( d_n = i^n \), ¿cuál es el valor de \( d_5 \)?",
            answers: [
                "A) 1",
                "B) \( i \)",
                "C) -1",
                "D) \( -i \)"
            ],
            correct: "B) \( i \)"
        },
        {
            question: "¿Cuál es el argumento del término general de la sucesión compleja \( e_n = 2n + 2ni \)?",
            answers: [
                "A) \( \pi/2 \)",
                "B) \( \pi/4 \)",
                "C) 1",
                "D) \( 0 \)"
            ],
            correct: "B) \( \pi/4 \)"
        },
        {
            question: "Dada la sucesión \( f_n = (-1 + i)^n \), ¿el módulo de cada término es siempre el mismo?",
            answers: [
                "A) Sí, y es \( \sqrt{2} \)",
                "B) No, el módulo varía en cada término",
                "C) Sí, y es 2",
                "D) Depende del valor de \( n \)"
            ],
            correct: "A) Sí, y es \( \sqrt{2} \)"
        },
        {
            question: "Si una sucesión compleja está definida como \( g_n = n + (-1)^n \cdot i \), ¿cuál es el valor de \( g_6 \)?",
            answers: [
                "A) \( 6 + i \)",
                "B) \( 6 - i \)",
                "C) \( 5 + i \)",
                "D) \( 5 - i \)"
            ],
            correct: "B) \( 6 - i \)"
        },
        {
            question: "¿Cuál de las siguientes opciones representa una sucesión periódica compleja?",
            answers: [
                "A) \( h_n = (-1)^n + i \)",
                "B) \( h_n = n + 2i \)",
                "C) \( h_n = i^n \)",
                "D) \( h_n = n + (-1)^n \)"
            ],
            correct: "C) \( h_n = i^n \)"
        }
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
        } else {
            resultMessage.innerText = `Incorrecto. La respuesta correcta es: ${correctAnswer} ❌`;
            resultMessage.style.color = "#dc3545";
        }
        resultMessage.classList.remove("hidden");
        nextQuestionButton.classList.remove("hidden");
        updateProgress();
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
