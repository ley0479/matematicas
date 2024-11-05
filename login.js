


// Seleccionar el formulario de inicio de sesión.
const loginForm = document.getElementById('loginForm');

// Escuchar el evento de envío del formulario.
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevenir el envío normal del formulario.

  // Obtener los valores de los campos del formulario.
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Enviar las credenciales al servidor con el método POST.
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }), // Convertir las credenciales en JSON.
    });

    // Analizar la respuesta del servidor.
    const data = await response.json();

    if (data.success) {
      // Si el inicio de sesión es exitoso, redirigir al panel de control.
      window.location.href = '/dashboard.html';'index.html';'pregunta2.html','preguntas3.html','preguntas4.html' // Seleccionar el formulario de inicio de sesión.
const loginForm = document.getElementById('loginForm');

// Escuchar el evento de envío del formulario.
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevenir el envío normal del formulario.

  // Obtener los valores de los campos del formulario.
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Enviar las credenciales al servidor con el método POST.
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }), // Convertir las credenciales en JSON.
    });

    // Analizar la respuesta del servidor.
    const data = await response.json();

    if (data.success) {
      // Si el inicio de sesión es exitoso, redirigir al panel de control.


      window.location.href = '/dashboard.html','index.html';'pregunta2.html','file:///C:/xampp/htdocs/matematicas/games3/index.html','preguntas4.html' 
    } else {
      // Mostrar mensaje de error en el caso de fallo.
      document.getElementById('message').innerText = 'Credenciales incorrectas. Intenta de nuevo.';
    }
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error);
    document.getElementById('message').innerText = 'Ocurrió un error. Inténtalo de nuevo.';
  }
});

    } else {
      // Mostrar mensaje de error en el caso de fallo.
      document.getElementById('message').innerText = 'Credenciales incorrectas. Intenta de nuevo.';
    }
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error);
    document.getElementById('message').innerText = 'Ocurrió un error. Inténtalo de nuevo.';
  }
});
