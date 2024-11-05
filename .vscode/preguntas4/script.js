// script.js

// Función para actualizar automáticamente el resultado cuando se cambian los valores
function actualizarResultado() {
    const real1 = parseFloat(document.getElementById("real1").value) || 0;
    const imag1 = parseFloat(document.getElementById("imag1").value) || 0;
    const real2 = parseFloat(document.getElementById("real2").value) || 0;
    const imag2 = parseFloat(document.getElementById("imag2").value) || 0;
    const operation = document.getElementById("operation").value;

    let resultado = "";

    // Realizar operación seleccionada
    switch (operation) {
        case "add":
            resultado = sumar(real1, imag1, real2, imag2);
            break;
        case "subtract":
            resultado = restar(real1, imag1, real2, imag2);
            break;
        case "multiply":
            resultado = multiplicar(real1, imag1, real2, imag2);
            break;
        case "divide":
            resultado = dividir(real1, imag1, real2, imag2);
            break;
        case "modulo":
            resultado = `Módulo del primer número: ${modulo(real1, imag1)}`;
            break;
    }

    // Mostrar el resultado en el cuadro de texto
    document.getElementById("resultText").textContent = resultado;
}

// Escuchar eventos de cambio en los inputs para calcular automáticamente
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('input', actualizarResultado);
});

// Funciones para las operaciones con números complejos
function sumar(a, b, c, d) {
    return `${a + c} + ${b + d}i`;
}

function restar(a, b, c, d) {
    return `${a - c} + ${b - d}i`;
}

function multiplicar(a, b, c, d) {
    const real = a * c - b * d;
    const imag = a * d + b * c;
    return `${real} + ${imag}i`;
}

function dividir(a, b, c, d) {
    const denom = c * c + d * d;
    const real = (a * c + b * d) / denom;
    const imag = (b * c - a * d) / denom;
    return `${real.toFixed(2)} + ${imag.toFixed(2)}i`;
}

function modulo(a, b) {
    return Math.sqrt(a * a + b * b).toFixed(2);
}
