// Arreglo con usuarios y roles predefinidos
const users = [
    { username: "admin", password: "1234", role: "admin" },
    { username: "student", password: "abcd", role: "student" }
];

// Función para manejar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');

    // Verifica si las credenciales coinciden
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        loginError.style.display = 'none';
        alert('Inicio de sesión exitoso!'); // Aviso para el usuario

        // Redirecciona según el rol del usuario
        if (user.role === 'admin') {
            window.location.href = "admin-dashboard.html"; // Dashboard del admin
        } else if (user.role === 'student') {
            window.location.href = "game.html"; // Página del juego
        }
    } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        loginError.style.display = 'block';
    }
});
