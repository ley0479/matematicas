<?php
session_start();
require 'config.php';

// Asegurarse de que el usuario sea un estudiante
if ($_SESSION['rol'] != 'estudiante') {
    die("Acceso denegado.");
}

// Obtener las preguntas de la base de datos
$stmt = $pdo->query("SELECT * FROM preguntas");
$preguntas = $stmt->fetchAll();

foreach ($preguntas as $pregunta) {
    echo "<form action='calificar.php' method='POST'>";
    echo "<h2>{$pregunta['pregunta']}</h2>";
    echo "<input type='radio' name='respuesta_{$pregunta['id']}' value='1'> {$pregunta['opcion1']}<br>";
    echo "<input type='radio' name='respuesta_{$pregunta['id']}' value='2'> {$pregunta['opcion2']}<br>";
    echo "<input type='radio' name='respuesta_{$pregunta['id']}' value='3'> {$pregunta['opcion3']}<br>";
    echo "<input type='radio' name='respuesta_{$pregunta['id']}' value='4'> {$pregunta['opcion4']}<br>";
}
echo "<input type='submit' value='Enviar respuestas'>";
echo "</form>";
?>
