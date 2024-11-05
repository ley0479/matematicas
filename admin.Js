document.addEventListener('DOMContentLoaded', () => {
    // Obtener todas las preguntas al cargar la página
    fetchPreguntas();
  
    // Manejar el formulario de creación de preguntas
    const crearPreguntaForm = document.getElementById('crearPreguntaForm');
    crearPreguntaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const pregunta = document.getElementById('pregunta').value;
      const respuesta = document.getElementById('respuesta').value;
      
      fetch('/preguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Autenticación
        },
        body: JSON.stringify({ pregunta, respuesta })
      })
      .then(res => res.text())
      .then(data => {
        alert(data);
        fetchPreguntas();
      });
    });
  });
  
  // Función para obtener todas las preguntas y mostrarlas
  function fetchPreguntas() {
    fetch('/preguntas', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      const listaPreguntas = document.getElementById('lista-preguntas');
      listaPreguntas.innerHTML = '';
      
      data.forEach(pregunta => {
        const li = document.createElement('li');
        li.textContent = `${pregunta.pregunta} - Respuesta: ${pregunta.respuesta}`;
        listaPreguntas.appendChild(li);
      });
    });
  }
  