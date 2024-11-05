<?php
// Datos de conexión a la base de datos
$host = 'localhost'; // Dirección del servidor MySQL (puede ser 'localhost' si estás en un entorno local)
$dbname = 'sistema_preguntas'; // Nombre de la base de datos que has creado
$username = 'estudiante'; // Nombre de usuario de MySQL (puede ser 'root' en un entorno local)
$password = '1234'; // Contraseña de MySQL (deja en blanco si es local sin contraseña)

// Intentamos conectarnos usando PDO
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Configuramos PDO para que lance excepciones en caso de error
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Si hay algún error en la conexión, lo mostramos
    die("Error en la conexión a la base de datos: " . $e->getMessage());
}
?>
