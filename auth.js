// Verificar si el usuario ha iniciado sesión
if (!sessionStorage.getItem('loggedIn')) {
    // Si no ha iniciado sesión, redirigir al login
    window.location.href = 'login.html';
  }
  