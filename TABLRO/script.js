document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
    const gameScreen = document.getElementById("game-screen");
    const answerButtons = document.querySelectorAll(".answer-btn");
    const resultMessage = document.getElementById("result-message");
    const nextQuestionButton = document.getElementById("next-question");
    const progressInner = document.getElementById("progress-inner");

    let questionIndex = 0;
    let correctAnswers = 0;

    const questions = [
      {
        question: "¿Cuál es el valor de |2 + 3i|?",
        answers: ["√13", "√11", "5", "√8"],
        correct: "√13"
      },
      {
        question: "¿Cuál es el valor de i²?",
        answers: ["1", "-1", "0", "i"],
        correct: "-1"
      },
      {
        question: "¿En qué siglo surgió el concepto de los números complejos?",
        answers: ["Siglo XV", "Siglo XVI", "Siglo XVII", "Siglo XVIII"],
        correct: "Siglo XVI"
      },
      {
        question: "¿Qué matemático fue el primero en aceptar las raíces cuadradas de números negativos?",
        answers: ["Carl Friedrich Gauss", "Leonhard Euler", "Rafael Bombelli", "Jean-Robert Argand"],
        correct: "Rafael Bombelli"
      },
      {
        question: "¿Qué letra se utiliza comúnmente para representar la raíz cuadrada de -1 en los números complejos?",
        answers: ["j", "z", "i", "k"],
        correct: "i"
      },
      {
        question: "¿Qué matemático introdujo la fórmula que vincula los números complejos con funciones trigonométricas?",
        answers: ["Jean-Robert Argand", "Leonhard Euler", "Gerolamo Cardano", "Augustin-Louis Cauchy"],
        correct: "Leonhard Euler"
      },
      {
        question: "¿Cómo se llama la representación geométrica de los números complejos?",
        answers: ["Plano Gaussiano", "Plano Imaginario", "Plano Complejo", "Diagrama de Argand"],
        correct: "Diagrama de Argand"
      },
      {
        question: "¿Qué matemático formalizó muchos conceptos relacionados con los números complejos y su importancia en ecuaciones algebraicas?",
        answers: ["Augustin-Louis Cauchy", "Gerolamo Cardano", "Carl Friedrich Gauss", "Jean le Rond d'Alembert"],
        correct: "Carl Friedrich Gauss"
      },
      {
        question: "Los números complejos fueron inicialmente rechazados por los matemáticos.",
        answers: ["Verdadero", "Falso"],
        correct: "Verdadero"
      },
      {
        question: "El matemático Jean-Robert Argand fue el primero en utilizar la letra 'i' para representar la raíz cuadrada de -1.",
        answers: ["Verdadero", "Falso"],
        correct: "Falso"
      }
    ];

    function startGame() {
      startScreen.classList.add("hidden");
      gameScreen.classList.remove("hidden");
      loadQuestion();
    }

    function loadQuestion() {
      const currentQuestion = questions[questionIndex];
      document.getElementById("question-title").innerText = `Pregunta: ${currentQuestion.question}`;
      answerButtons.forEach((btn, index) => {
        btn.innerText = currentQuestion.answers[index];
        btn.onclick = () => checkAnswer(currentQuestion.answers[index]);
      });
      resultMessage.classList.add("hidden");
      nextQuestionButton.classList.add("hidden");
    }

    function checkAnswer(selectedAnswer) {
      const currentQuestion = questions[questionIndex];
      if (selectedAnswer === currentQuestion.correct) {
        correctAnswers++;
        resultMessage.innerText = "¡Correcto! 🎉";
        resultMessage.style.color = "#28a745";
        resultMessage.style.opacity = "1";
        animateConfetti();
      } else {
        resultMessage.innerText = "Incorrecto 😞";
        resultMessage.style.color = "#dc3545";
        resultMessage.style.opacity = "1";
      }
      updateProgressBar();
      resultMessage.classList.remove("hidden");
      nextQuestionButton.classList.remove("hidden");
    }

    function nextQuestion() {
      questionIndex++;
      if (questionIndex < questions.length) {
        loadQuestion();
      } else {
        resultMessage.innerText = "¡Juego Terminado! 🎉";
        resultMessage.style.color = "#ffc107";
        nextQuestionButton.classList.add("hidden");
      }
    }

    function updateProgressBar() {
      const progress = ((questionIndex + 1) / questions.length) * 100;
      progressInner.style.width = `${progress}%`;
    }

    function animateConfetti() {
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.backgroundColor = randomColor();
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animation = `fall ${1.5 + Math.random()}s ease-out forwards`;
        gameScreen.appendChild(confetti);

        setTimeout(() => confetti.remove(), 2000);
      }
    }

    function randomColor() {
      const colors = ["#FF5733", "#FFBD33", "#75FF33", "#33FF57", "#33FFBD"];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    startButton.addEventListener("click", startGame);
    nextQuestionButton.addEventListener("click", nextQuestion);
});
