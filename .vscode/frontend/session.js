// session.js

// Función para obtener el token desde localStorage o cookies
function getToken() {
    return localStorage.getItem('token'); // O puedes usar cookies en su lugar
  }
  
  // Función para verificar si el token es válido
  function isAuthenticated() {
    const token = getToken();
  
    // Si no hay token, el usuario no está autenticado
    if (!token) {
      return false;
    }
  
    try {
      // Decodificar el token (si lo necesitas) o verificar su expiración
      const payload = JSON.parse(atob(token.split('.')[1])); // Decodificar el payload del JWT
  
      // Verificar si el token ha expirado
      const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
      return payload.exp > currentTime; // El token es válido si no ha expirado
    } catch (error) {
      console.error('Error decodificando el token:', error);
      return false;
    }
  }
  
  // Función para redirigir al usuario si no está autenticado
  function redirectIfNotAuthenticated() {
    if (!isAuthenticated()) {
      // Redirigir al login si no está autenticado
      window.location.href = '/login.html'; // Cambia esta URL según sea necesario
    }
  }
  
  // Ejecutar la validación cuando la página se carga
  window.onload = function() {
    redirectIfNotAuthenticated(); // Redirige si no tiene sesión
  }
  