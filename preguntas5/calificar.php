<?php

$servername = "localhost";  // Nombre del servidor (asumiendo que estás trabajando en un servidor local)
$username = "estudiante";  // Nombre de usuario para la base de datos (asegúrate de que "admin" sea el correcto)
$password = "1234";  // Contraseña para la base de datos (verifica que sea correcta)
$dbname = "matematicas_especiales";  // Nombre de la base de datos (asegúrate de que exista y sea correcto)
 
// Crear conexión 
$conn = new mysqli($servername, $username, $password, $dbname);  // Establece la conexión con la base de datos usando las credenciales provistas

// Verificar conexión
if ($conn->connect_error) {  // Si hay un error en la conexión
    die("Conexión fallida: " . $conn->connect_error);  // Muestra un mensaje y detiene el script si la conexión falla
}

$puntaje = 0;  // Inicializa el puntaje en 0
$total_preguntas = 0;  // Inicializa el contador de preguntas en 0

// Procesa todas las respuestas enviadas mediante POST
foreach ($_POST as $pregunta_id => $respuesta_seleccionada) {  
    // Quitar el prefijo "pregunta_" (esto asume que las claves del array $_POST están prefijadas con "pregunta_")
    $id_pregunta = str_replace("pregunta_", "", $pregunta_id);  // Elimina el prefijo para obtener solo el ID de la pregunta

    // Recuperar la respuesta correcta de la base de datos
    $sql = "SELECT respuesta_correcta FROM preguntas WHERE id = $id_pregunta";  // Consulta SQL para obtener la respuesta correcta

    $result = $conn->query($sql);  // Ejecuta la consulta

    // Verifica si se obtuvo un resultado
    if ($result->num_rows > 0) {  // Asegura que la consulta devolvió un resultado
        $row = $result->fetch_assoc();  // Extrae la fila de resultados en un array asociativo

        // Comparar la respuesta seleccionada con la correcta
        if ($row['respuesta_correcta'] == $respuesta_seleccionada) {  // Si la respuesta seleccionada es igual a la respuesta correcta
            $puntaje++;  // Aumenta el puntaje
        }
    } else {
        echo "No se encontró la pregunta con ID: " . $id_pregunta;  // Muestra un mensaje si no se encuentra la pregunta en la base de datos
    }

    $total_preguntas++;  // Aumenta el contador de preguntas procesadas
}

// Cierra la conexión (falta incluir esto al final del script)
$conn->close();  // Cierra la conexión a la base de datos una vez finalizado el procesamiento

?>
