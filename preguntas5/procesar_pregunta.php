<?php
$servername = "localhost";
$username = "";
$password = "1234";
$dbname = "sistema_preguntas";

// Crear conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recoger datos del formulario
$pregunta = $_POST['pregunta'];
$opcion1 = $_POST['opcion1'];
$opcion2 = $_POST['opcion2'];
$opcion3 = $_POST['opcion3'];
$opcion4 = $_POST['opcion4'];
$respuesta_correcta = $_POST['respuesta_correcta'];

// Insertar datos en la tabla de preguntas
$sql = "INSERT INTO preguntas (pregunta, opcion1, opcion2, opcion3, opcion4, respuesta_correcta) 
        VALUES ('$pregunta', '$opcion1', '$opcion2', '$opcion3', '$opcion4', $respuesta_correcta)";

if ($conn->query($sql) === TRUE) {
    echo "Nueva pregunta añadida exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

<?php
session_start();
require 'config.php';

if ($_SESSION['rol'] != 'admin' && $_SESSION['rol'] != 'docente') {
    die("No tienes permiso para añadir preguntas.");
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $pregunta = $_POST['pregunta'];
    $opcion1 = $_POST['opcion1'];
    $opcion2 = $_POST['opcion2'];
    $opcion3 = $_POST['opcion3'];
    $opcion4 = $_POST['opcion4'];
    $respuesta_correcta = $_POST['respuesta_correcta'];

    // Insertar la pregunta en la base de datos
    $stmt = $pdo->prepare("INSERT INTO preguntas (pregunta, opcion1, opcion2, opcion3, opcion4, respuesta_correcta) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->execute([$pregunta, $opcion1, $opcion2, $opcion3, $opcion4, $respuesta_correcta]);

    echo "Pregunta añadida correctamente.";
}
?>
