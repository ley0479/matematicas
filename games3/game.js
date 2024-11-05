// Array de preguntas y respuestas
const questions = [
    {
      question: "¿En qué siglo surgió el concepto de los números complejos?",
      options: ["A) Siglo XV", "B) Siglo XVI", "C) Siglo XVII", "D) Siglo XVIII"],
      correctAnswer: "B) Siglo XVI"
    },
    {
      question: "¿Qué matemático fue el primero en aceptar las raíces cuadradas de números negativos?",
      options: ["A) Carl Friedrich Gauss", "B) Leonhard Euler", "C) Rafael Bombelli", "D) Jean-Robert Argand"],
      correctAnswer: "C) Rafael Bombelli"
    },
    {
      question: "¿Qué letra se utiliza comúnmente para representar la raíz cuadrada de -1 en los números complejos?",
      options: ["A) j", "B) z", "C) i", "D) k"],
      correctAnswer: "C) i"
    },
    {
      question: "¿Qué matemático introdujo la fórmula que vincula los números complejos con funciones trigonométricas?",
      options: ["A) Jean-Robert Argand", "B) Leonhard Euler", "C) Gerolamo Cardano", "D) Augustin-Louis Cauchy"],
      correctAnswer: "B) Leonhard Euler"
    },
    {
      question: "¿Cómo se llama la representación geométrica de los números complejos?",
      options: ["A) Plano Gaussiano", "B) Plano Imaginario", "C) Plano Complejo", "D) Diagrama de Argand"],
      correctAnswer: "D) Diagrama de Argand"
    },
    {
      question: "¿Qué matemático formalizó muchos conceptos relacionados con los números complejos y su importancia en ecuaciones algebraicas?",
      options: ["A) Augustin-Louis Cauchy", "B) Gerolamo Cardano", "C) Carl Friedrich Gauss", "D) Jean le Rond d'Alembert"],
      correctAnswer: "C) Carl Friedrich Gauss"
    },
    {
      question: "Los números complejos fueron inicialmente rechazados por los matemáticos.",
      options: ["A) Verdadero", "B) Falso"],
      correctAnswer: "A) Verdadero"
    },
    {
      question: "El matemático Jean-Robert Argand fue el primero en utilizar la letra 'i' para representar la raíz cuadrada de -1.",
      options: ["A) Verdadero", "B) Falso"],
      correctAnswer: "B) Falso"
    },
    {
      question: "Relaciona a los siguientes matemáticos con sus contribuciones a los números complejos.",
      options: ["1-Leonhard Euler", "2-Jean-Robert Argand", "3-Rafael Bombelli", "4-Carl Friedrich Gauss"],
      correctAnswer: "1-B, 2-C, 3-A, 4-D"
    }
  ];
  
  // Variables para controlar el estado del juego
  let currentQuestionIndex = 0;
  let userAnswers = {}; // Para almacenar las respuestas del usuario
  
  // Función para cargar la pregunta actual
  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
  
    // Mostrar las opciones
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = ''; // Limpiar opciones anteriores
    question.options.forEach((option, index) => {
      const optionButton = document.createElement('button');
      optionButton.innerText = option;
      optionButton.onclick = () => selectAnswer(option);
      optionsDiv.appendChild(optionButton);
    });
  }
  
  // Función para seleccionar una respuesta
  function selectAnswer(option) {
    userAnswers[currentQuestionIndex] = option;
    showFeedback(option);
  }
  
  // Función para mostrar si la respuesta es correcta o incorrecta
  function showFeedback(option) {
    const feedbackDiv = document.getElementById('answer-feedback');
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (option === correctAnswer) {
      feedbackDiv.innerText = '¡Correcto!';
    } else {
      feedbackDiv.innerText = `Incorrecto. La respuesta correcta es: ${correctAnswer}`;
    }
  }
  
  // Función para cargar la siguiente pregunta
  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  // Función para cargar la pregunta anterior
  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion();
    }
  }
  
  // Función para mostrar los resultados en el tablero
  function showResults() {
    const resultsTableBody = document.querySelector('#results tbody');
    resultsTableBody.innerHTML = ''; // Limpiar resultados anteriores
  
    questions.forEach((question, index) => {
      const userAnswer = userAnswers[index] || 'No respondida';
      const correctAnswer = question.correctAnswer;
      const resultRow = document.createElement('tr');
  
      resultRow.innerHTML = `
        <td>${question.question}</td>
        <td>${userAnswer}</td>
        <td>${correctAnswer}</td>
        <td>${userAnswer === correctAnswer ? 'Correcto' : 'Incorrecto'}</td>
      `;
  
      resultsTableBody.appendChild(resultRow);
    });
  }
  
  // Cargar la primera pregunta al iniciar
  window.onload = loadQuestion;
  