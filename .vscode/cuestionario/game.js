const questions = [
    {
        question: "¿Qué es una función compleja?",
        options: [
            "a) Una función que tiene más de una variable independiente",
            "b) Una función que asocia un número real a cada número complejo",
            "c) Una función que tiene números complejos como variables y valores",
            "d) Una función que asocia un número complejo a cada número real"
        ],
        answer: "c) Una función que tiene números complejos como variables y valores"
    },
    {
        question: "¿Qué son las ecuaciones de Cauchy-Riemann?",
        options: [
            "a) Condiciones para que una función compleja sea diferenciable",
            "b) Ecuaciones que relacionan la continuidad de una función",
            "c) Condiciones para que una función compleja sea integrable",
            "d) Ecuaciones que determinan las singularidades de una función"
        ],
        answer: "a) Condiciones para que una función compleja sea diferenciable"
    },
    {
        question: "Determina si la función f(z) = z^2 + 2z + 1 es analítica en el plano complejo.",
        options: [
            "Es analítica en todo el plano",
            "No es analítica en z = -1",
            "Es continua pero no diferenciable en z = 1",
            "Ninguna de las anteriores"
        ],
        answer: "Es analítica en todo el plano"
    },
    {
        question: "Calcula la integral de la función f(z) = 1/z sobre el círculo |z|=1.",
        options: [
            "Usa el Teorema de Cauchy, la integral es 2πi",
            "La integral es 0",
            "No se puede calcular",
            "La integral es finita"
        ],
        answer: "Usa el Teorema de Cauchy, la integral es 2πi"
    },
    {
        question: "Expande la función f(z) = 1/(z(z−1)) en una serie de Laurent en torno a z=0.",
        options: [
            "1/z + 1/(z-1)",
            "1/z + 1/z^2",
            "1/z^2 + z^2",
            "Ninguna de las anteriores"
        ],
        answer: "1/z + 1/(z-1)"
    }
    // Puedes seguir añadiendo más preguntas teóricas y ejercicios prácticos aquí
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const currentQuestion = questions[currentQuestionIndex];
    
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option-button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option, currentQuestion.answer));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    const feedbackElement = document.getElementById("answer-feedback");
    const resultsTable = document.getElementById("results").getElementsByTagName("tbody")[0];
    const row = resultsTable.insertRow();

    row.insertCell(0).innerText = questions[currentQuestionIndex].question;
    row.insertCell(1).innerText = selected;
    row.insertCell(2).innerText = correct;

    if (selected === correct) {
        feedbackElement.innerText = "¡Correcto!";
        feedbackElement.style.color = "green";
        row.insertCell(3).innerText = "Correcto";
        score++;
    } else {
        feedbackElement.innerText = "Incorrecto. La respuesta correcta es: " + correct;
        feedbackElement.style.color = "red";
        row.insertCell(3).innerText = "Incorrecto";
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        document.getElementById("answer-feedback").innerText = "";
    } else {
        alert("¡Has completado todas las preguntas! Tu puntuación es: " + score + "/" + questions.length);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        document.getElementById("answer-feedback").innerText = "";
    }
}

// Cargar la primera pregunta
window.onload = loadQuestion;
