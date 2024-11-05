<?php
session_start();

if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}

// Controlar acceso basado en el rol
$rol = $_SESSION['rol'];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Panel de Control</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2>Bienvenido, <?php echo $_SESSION['usuario']; ?></h2>
        <p>Rol: <?php echo $rol; ?></p>

        <?php if ($rol == 'administrador') : ?>
            <h3>Opciones de Administrador</h3>
            <ul>
                <li>Gestionar Usuarios</li>
                <li>Ver Reportes</li>
                <li>Configurar Sistema</li>
            </ul>
        <?php elseif ($rol == 'docente') : ?>
            <h3>Opciones de Docente</h3>
            <ul>
                <li>Crear Preguntas</li>
                <li>Ver Resultados de Estudiantes</li>
            </ul>
        <?php else : ?>
            <h3>Opciones de Estudiante</h3>
            <ul>
                <li>Realizar Cuestionarios</li>
                <li>Ver Progreso</li>
            </ul>
        <?php endif; ?>
        
        <a href="logout.php" class="btn btn-danger">Cerrar Sesión</a>
    </div>
</body>
</html>
