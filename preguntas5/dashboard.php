<?php

session_start();  // Inicia la sesión PHP para acceder a las variables de sesión almacenadas en el servidor.
if (!isset($_SESSION['estudiante'])) {  // Verifica si la variable 'username' no está definida, lo que significa que el usuario no ha iniciado sesión.
    header('Location: index.html');  // Si no ha iniciado sesión, redirige al usuario a la página de inicio de sesión.
    exit();  // Detiene la ejecución del script para asegurarse de que el resto del código no se ejecute si el usuario no está autenticado.
}

echo "<h1>Bienvenido, " . $_SESSION['Estudiante'] . "</h1>";  // Muestra un mensaje de bienvenida con el nombre de usuario almacenado en la sesión.

if ($_SESSION['rol'] == 'admin') {  // Verifica si el rol del usuario es 'admin'.
    echo "<p>Eres administrador. Puedes gestionar usuarios y preguntas.</p>";  // Muestra un mensaje específico para el administrador.
} elseif ($_SESSION['rol'] == 'docente') {  // Verifica si el rol del usuario es 'docente'.
    echo "<p>Eres docente. Puedes crear y gestionar preguntas.</p>";  // Muestra un mensaje específico para el docente.
} elseif ($_SESSION['rol'] == 'estudiante') {  // Verifica si el rol del usuario es 'estudiante'.
    echo "<p>Eres estudiante. Puedes responder cuestionarios.</p>";  // Muestra un mensaje específico para el estudiante.
}

?>
