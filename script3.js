const questions = [
    {
        question: "¿Cuál es la suma de (3 + 4i) + (1 + 2i)?",
        answers: ["4 + 6i", "5 + 6i", "3 + 4i", "2 + 3i"],
        correct: 0
    },
    {
        question: "¿Qué es (5 + 6i) - (2 + 3i)?",
        answers: ["3 + 3i", "5 + 3i", "7 + 9i", "4 + 3i"],
        correct: 0
    },
    {
        question: "¿Cuál es el resultado de (2 + 3i) * (4 + 5i)?",
        answers: ["-7 + 22i", "6 + 15i", "8 + 19i", "2 + 12i"],
        correct: 2
    },
    {
        question: "¿Qué es (6 + 8i) / (3 + 4i)?",
        answers: ["2 + 1i", "3 + 2i", "1 + 1i", "4 + 2i"],
        correct: 0
    },
    {
        question: "¿Cuál es el módulo de (3 + 4i)?",
        answers: ["5", "7", "6", "4"],
        correct: 0
    },
    {
        question: "¿Cuál es el argumento de (3 + 4i)?",
        answers: ["0.927", "1.414", "0.75", "1.57"],
        correct: 0
    },
    {
        question: "¿Cuál es la suma de (1 + 2i) + (3 + 4i)?",
        answers: ["4 + 6i", "5 + 5i", "2 + 2i", "1 + 1i"],
        correct: 0
    },
    {
        question: "¿Qué es el módulo de (4 - 3i)?",
        answers: ["5", "2", "4", "1"],
        correct: 0
    },
    {
        question: "¿Cuál es la multiplicación de (1 + i) * (1 - i)?",
        answers: ["0", "1", "2", "-1"],
        correct: 1
    },
    {
        question: "¿Qué es (2 + 2i) + (2 - 2i)?",
        answers: ["2", "4", "0", "6"],
        correct: 1
    },
];

let currentQuestionIndex = 0;

function startGame() {
    currentQuestionIndex = 0;
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('loading').classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    document.getElementById('question').innerText = question.question;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    document.getElementById('loading').classList.remove('hidden');
    
    // Simular un tiempo de espera para mostrar el reloj de arena
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        if (index === question.correct) {
            alert('¡Respuesta correcta!');
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(questions[currentQuestionIndex]);
            } else {
                showResult('¡Felicidades! Has respondido todas las preguntas correctamente.');
            }
        } else {
            showResult('Incorrecto. Intenta de nuevo.');
        }
    }, 1500); // Espera 1.5 segundos
}

function showResult(message) {
    document.getElementById('result-message').innerText = message;
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('game-container').classList.add('hidden');
}

document.getElementById('restart-button').addEventListener('click', startGame);

window.onload = startGame;
