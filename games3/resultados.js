// Datos simulados de resultados
const resultados = [
    { jugador: "Leison", puntaje: 95 },
    { jugador: "Ana", puntaje: 80 },
    { jugador: "Juan", puntaje: 60 },
    { jugador: "Maria", puntaje: 85 },
    { jugador: "Carlos", puntaje: 70 }
];

// Función para generar el gráfico
function generarGraficoResultados() {
    const ctx = document.getElementById('resultadosChart').getContext('2d');
    const nombresJugadores = resultados.map(r => r.jugador);
    const puntajes = resultados.map(r => r.puntaje);

    new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: barras
        data: {
            labels: nombresJugadores,
            datasets: [{
                label: 'Puntaje',
                data: puntajes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // El eje Y comienza en 0
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'rgb(255, 99, 132)'
                    }
                }
            }
        }
    });
}

// Ejecutar la función cuando la página haya cargado
window.onload = generarGraficoResultados;
