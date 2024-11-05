function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        // Guardar el token en localStorage
        localStorage.setItem('token', data.token);
        // Redirigir al dashboard o a otra página
        window.location.href = '/dashboard.html';'index.html'
      } else {
        console.error('Login failed');
      }
    });
  }
  