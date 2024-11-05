<?php
$servername = "localhost";
$username = "leison";
$password = "1234";
$dbname = "mi_proyecto";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consultar el total de usuarios registrados
$sqlUsuarios = "SELECT COUNT(*) as total_usuarios FROM usuarios";
$resultUsuarios = $conn->query($sqlUsuarios);
$totalUsuarios = $resultUsuarios->fetch_assoc()['total_usuarios'];

// Consultar el total de preguntas resueltas
$sqlPreguntas = "SELECT COUNT(*) as total_preguntas FROM preguntas_resueltas";
$resultPreguntas = $conn->query($sqlPreguntas);
$totalPreguntas = $resultPreguntas->fetch_assoc()['total_preguntas'];

// Consultar el total de visitas
$sqlVisitas = "SELECT COUNT(*) as total_visitas FROM estadisticas_visitas";
$resultVisitas = $conn->query($sqlVisitas);
$totalVisitas = $resultVisitas->fetch_assoc()['total_visitas'];

// Devolver los datos como JSON
$response = array(
    'usuarios' => $totalUsuarios,
    'preguntas' => $totalPreguntas,
    'visitas' => $totalVisitas
);

echo json_encode($response);

$conn->close();
?>
