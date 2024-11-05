const questions = [ 
    {
        question: "¿Qué es una sucesión convergente?",
        options: [
            "Una sucesión cuyo límite es infinito.",
            "Una sucesión cuyos términos tienden a un valor finito cuando el número de términos tiende a infinito.",
            "Una sucesión cuyos términos son siempre números enteros.",
            "Una sucesión que no tiene límite."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de las siguientes expresiones representa una sucesión divergente?",
        options: [
            "an = 1/n",
            "an = n²",
            "an = (-1)ⁿ/n",
            "an = 0"
        ],
        correctAnswer: 1
    },
    {
        question: "Si una sucesión compleja Zn = xn + iyn es convergente, ¿qué debe suceder con xn e yn por separado?",
        options: [
            "Solo xn debe converger.",
            "Solo yn debe converger.",
            "Tanto xn como yn deben converger a valores finitos.",
            "Ninguno de los dos debe converger."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál de las siguientes sucesiones es convergente?",
        options: [
            "Zn = n + i(1/n)",
            "Zn = (1/n) + i(1/n)",
            "Zn = n + in",
            "Zn = (-1)ⁿ + in"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es una sucesión divergente?",
        options: [
            "Una sucesión cuyo límite existe y es finito.",
            "Una sucesión que nunca alcanza un valor límite.",
            "Una sucesión cuyos términos decrecen constantemente.",
            "Una sucesión que tiene un límite oscilante."
        ],
        correctAnswer: 1
    },
    {
        question: "Para la sucesión compleja Zn = (1/n) + i(1/n²), ¿cuál es el límite cuando n tiende a infinito?",
        options: [
            "Z = 0 + i0",
            "Z = 1 + i1",
            "Z = ∞ + i∞",
            "No tiene límite."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa que una sucesión compleja sea divergente?",
        options: [
            "Sus términos tienden a un número complejo fijo.",
            "Sus términos no tienden a ningún valor complejo.",
            "Sus términos son números reales únicamente.",
            "Los valores imaginarios tienden a cero, pero los reales no."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de las siguientes afirmaciones es verdadera para una sucesión Zn = n + in²?",
        options: [
            "La sucesión es convergente porque n tiende a infinito.",
            "La sucesión es divergente porque el valor imaginario crece más rápido que el real.",
            "La sucesión es convergente porque tanto el valor real como el imaginario tienden al mismo valor.",
            "La sucesión es constante."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué tipo de sucesión es Zn = (-1)ⁿ + i(-1)ⁿ?",
        options: [
            "Convergente.",
            "Divergente oscilante.",
            "Compleja constante.",
            "No definida."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el valor límite de la sucesión compleja Zn = (n/n+1) + i(1/n+1) cuando n tiende a infinito?",
        options: [
            "Z = 0 + i1",
            "Z = 1 + i0",
            "Z = ∞ + i0",
            "Z = 1 + i1"
        ],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;

    userAnswers[currentQuestionIndex] = {
        question: currentQuestion.question,
        selectedAnswer: currentQuestion.options[selectedIndex],
        correctAnswer: currentQuestion.options[currentQuestion.correctAnswer],
        result: isCorrect ? 'Correcto' : 'Incorrecto'
    };

    document.getElementById('answer-feedback').textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';
    updateResultsTable();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        document.getElementById('answer-feedback').textContent = '';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        document.getElementById('answer-feedback').textContent = '';
    }
}

function updateResultsTable() {
    const resultsTableBody = document.querySelector('#results tbody');
    resultsTableBody.innerHTML = '';

    userAnswers.forEach((answer) => {
        const row = document.createElement('tr');

        const questionCell = document.createElement('td');
        questionCell.textContent = answer.question;

        const userAnswerCell = document.createElement('td');
        userAnswerCell.textContent = answer.selectedAnswer;

        const correctAnswerCell = document.createElement('td');
        correctAnswerCell.textContent = answer.correctAnswer;

        const resultCell = document.createElement('td');
        resultCell.textContent = answer.result;

        row.appendChild(questionCell);
        row.appendChild(userAnswerCell);
        row.appendChild(correctAnswerCell);
        row.appendChild(resultCell);

        resultsTableBody.appendChild(row);
    });
}

// Inicializar el juego con la primera pregunta
displayQuestion();
