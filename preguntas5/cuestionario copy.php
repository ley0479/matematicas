<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego Conocimientos - Matemáticos de Función Compleja</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <ul class="menu">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="calculadora.html">Calculadora de Números Complejos</a></li>
            <li><a href="juego.html">Juego Didáctico</a></li>
            <li><a href="tablero.html">Tablero</a></li>
        </ul>
    </nav>

    <div id="quiz-container">
        <h1>Juego de Conocimientos - Matemáticos de Función Compleja</h1>
        <p id="rules">Responde correctamente el mayor número de preguntas para avanzar de nivel. ¡Buena suerte!</p>
        <div id="level-info">Nivel: <span id="current-level">1</span> | Puntuación: <span id="score">0</span></div>
        
        <div id="timer">Tiempo restante: <span id="time-left">60</span> segundos</div>
        <div id="question"></div>
        <div id="options"></div>
        <div id="answer-feedback"></div>
        <div id="controls">
            <button id="prev-button" onclick="prevQuestion()">Anterior</button>
            <button id="next-button" onclick="nextQuestion()">Siguiente</button>
        </div>
    </div>

    <div id="results-table">
        <h2>Tablero de Aciertos y Errores</h2>
        <table id="results">
            <thead>
                <tr>
                    <th>Pregunta</th>
                    <th>Tu Respuesta</th>
                    <th>Respuesta Correcta</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <!-- Retroalimentación de Fin de Nivel -->
    <div id="end-level-feedback" style="display: none;">
        <h2 id="level-status"></h2>
        <p id="next-level-instructions"></p>
    </div>

    <!-- Gráfico de Progreso -->
    <canvas id="progressChart"></canvas>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="game.js"></script>
</body>
</html>
