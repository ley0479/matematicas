// Preguntas y respuestas correctas
const correctAnswers = {
  question1: "Siglo XVI",
  question2: "Rafael Bombelli",
  question3: "i"
};

// Guardar las respuestas del usuario en localStorage
function guardarRespuestas() {
  const form = document.getElementById('questionsForm');
  const formData = new FormData(form);

  const userAnswers = {
    question1: formData.get('question1'),
    question2: formData.get('question2'),
    question3: formData.get('question3')
  };

  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  alert('Respuestas guardadas');
}

// Cargar las respuestas desde localStorage
function cargarRespuestas() {
  const storedAnswers = JSON.parse(localStorage.getItem('userAnswers'));
  if (!storedAnswers) return;

  const tableBody = document.querySelector('#resultsTable tbody');
  tableBody.innerHTML = '';  // Limpiar la tabla

  for (const question in storedAnswers) {
    const row = document.createElement('tr');

    const questionCell = document.createElement('td');
    questionCell.textContent = questionText(question);
    row.appendChild(questionCell);

    const userAnswerCell = document.createElement('td');
    userAnswerCell.textContent = storedAnswers[question];
    row.appendChild(userAnswerCell);

    const correctAnswerCell = document.createElement('td');
    correctAnswerCell.textContent = correctAnswers[question];
    row.appendChild(correctAnswerCell);

    const resultCell = document.createElement('td');
    resultCell.textContent = storedAnswers[question] === correctAnswers[question] ? 'Correcto' : 'Incorrecto';
    row.appendChild(resultCell);

    tableBody.appendChild(row);
  }

  renderChart();
}

// Devuelve el texto de la pregunta basado en su ID
function questionText(questionId) {
  switch (questionId) {
    case 'question1': return '¿En qué siglo surgió el concepto de los números complejos?';
    case 'question2': return '¿Qué matemático aceptó las raíces cuadradas de números negativos?';
    case 'question3': return '¿Qué letra representa la raíz cuadrada de -1?';
    default: return '';
  }
}

// Gráfico de resultados
function renderChart() {
  const storedAnswers = JSON.parse(localStorage.getItem('userAnswers'));
  if (!storedAnswers) return;

  const correctCount = Object.keys(storedAnswers).filter(question => storedAnswers[question] === correctAnswers[question]).length;
  const incorrectCount = Object.keys(storedAnswers).length - correctCount;

  const ctx = document.getElementById('resultadosChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correctas', 'Incorrectas'],
      datasets: [{
        label: 'Resultados',
        data: [correctCount, incorrectCount],
        backgroundColor: ['#4caf50', '#f44336']
      }]
    }
  });
}
// Datos de ejemplo de preguntas, respuestas y resultados
const resultados = [
  { pregunta: '¿Cuál es el resultado de 3 + 5?', tuRespuesta: '8', respuestaCorrecta: '8', acierto: true },
  { pregunta: '¿Cuánto es 2 * 6?', tuRespuesta: '12', respuestaCorrecta: '12', acierto: true },
  { pregunta: '¿Cuál es la raíz cuadrada de 16?', tuRespuesta: '5', respuestaCorrecta: '4', acierto: false }
];

// Contabilizar visitas a la página
let visitas = localStorage.getItem('visitas') || 0;
visitas++;
localStorage.setItem('visitas', visitas);
console.log(`Visitas: ${visitas}`);

// Generar tabla de resultados
function generarTablaResultados() {
  const tabla = document.querySelector('#results tbody');
  resultados.forEach(resultado => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${resultado.pregunta}</td>
      <td>${resultado.tuRespuesta}</td>
      <td>${resultado.respuestaCorrecta}</td>
      <td>${resultado.acierto ? 'Correcto' : 'Incorrecto'}</td>
    `;
    tabla.appendChild(fila);
  });
}

// Ver estadísticas en un gráfico
function verEstadisticas() {
  const total = resultados.length;
  const aciertos = resultados.filter(r => r.acierto).length;
  const errores = total - aciertos;

  const ctx = document.getElementById('resultadosChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Aciertos', 'Errores'],
      datasets: [{
        data: [aciertos, errores],
        backgroundColor: ['#4CAF50', '#FF5252'],
      }]
    }
  });
}

// Reiniciar los resultados (limpiar tabla)
function reiniciarResultados() {
  const tabla = document.querySelector('#results tbody');
  tabla.innerHTML = '';
}

// Cargar la tabla de resultados al iniciar la página
window.onload = generarTablaResultados;

// Cargar respuestas y actualizar el gráfico al cargar la página del tablero
window.onload = cargarRespuestas;
