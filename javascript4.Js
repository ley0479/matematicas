// Login: Simulación de credenciales
const validUsername = 'admin';
const validPassword = '1234';

// Manejo del formulario de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Evitar recarga de la página

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        document.getElementById('login-container').style.display = 'none';  // Ocultar login
        document.getElementById('calculator-container').style.display = 'block';  // Mostrar calculadora
    } else {
        document.getElementById('loginError').style.display = 'block';  // Mostrar error
    }
});

// Función para manejar el evento de enviar el formulario de la calculadora
document.getElementById('complexForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Evitar recargar la página

    // Obtener los valores ingresados por el usuario
    const real1 = parseFloat(document.getElementById('real1').value);
    const imag1 = parseFloat(document.getElementById('imag1').value);
    const real2 = parseFloat(document.getElementById('real2').value);
    const imag2 = parseFloat(document.getElementById('imag2').value);
    const operation = document.getElementById('operation').value;

    let resultText = '';

    // Realizar la operación seleccionada
    switch (operation) {
        case 'add':
            resultText = `Resultado: (${real1 + real2}) + (${imag1 + imag2})i`;
            break;
        case 'subtract':
            resultText = `Resultado: (${real1 - real2}) + (${imag1 - imag2})i`;
            break;
        case 'multiply':
            const realResult = real1 * real2 - imag1 * imag2;
            const imagResult = real1 * imag2 + imag1 * real2;
            resultText = `Resultado: (${realResult}) + (${imagResult})i`;
            break;
        case 'divide':
            const denominator = real2 * real2 + imag2 * imag2;
            if (denominator === 0) {
                resultText = 'Error: División por cero no es posible';
            } else {
                const realDiv = (real1 * real2 + imag1 * imag2) / denominator;
                const imagDiv = (imag1 * real2 - real1 * imag2) / denominator;
                resultText = `Resultado: (${realDiv.toFixed(2)}) + (${imagDiv.toFixed(2)})i`;
            }
            break;
        case 'modulo':
            const modulo = Math.sqrt(real1 * real1 + imag1 * imag1);
            resultText = `Módulo: ${modulo.toFixed(2)}`;
            break;
        default:
            resultText = 'Operación no válida';
    }

    // Mostrar el resultado
    document.getElementById('resultText').innerText = resultText;
});
