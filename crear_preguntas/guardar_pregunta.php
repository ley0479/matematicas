<?php
// Configuración de la conexión a la base de datos
$servername = "localhost"; // Cambia si es necesario
$username = "leison"; // Cambia a tu usuario de MySQL
$password = ""; // Cambia a tu contraseña de MySQL
$dbname = "crear_preguntas"; // Cambia al nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Establecer el conjunto de caracteres a UTF-8 para evitar problemas con caracteres especiales
$conn->set_charset("utf8");

// Obtener los datos del formulario
$question = $_POST['question'];
$option1 = $_POST['option1'];
$option2 = $_POST['option2'];
$correctOption = $_POST['correctOption'];

// Preparar y vincular la consulta para evitar inyecciones SQL
$stmt = $conn->prepare("INSERT INTO preguntas (enunciado, opcion1, opcion2, respuesta_correcta) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $question, $option1, $option2, $correctOption);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Pregunta creada con éxito";
} else {
    echo "Error: " . $stmt->error;
}

// Cerrar la declaración y la conexión
$stmt->close();
$conn->close();
?>
