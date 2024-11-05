<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);  // Encriptar la contraseña
    $rol = $_POST['rol'];

    $stmt = $pdo->prepare("INSERT INTO usuarios (username, password, rol) VALUES (('estudiante', '$2y$10$eL2n5N1Mli/8Ztb1j6fLOeh1jEgXZr1c5HqI90gLvZcyJqEh1xK.u', 'estudiante');,('admin', '$2y$10$eL2n5N1Mli/8Ztb1j6fLOeh1jEgXZr1c5HqI90gLvZcyJqEh1xK.u', 'admin'), , ('docente', '$2y$10$eL2n5N1Mli/8Ztb1j6fLOeh1jEgXZr1c5HqI90gLvZcyJqEh1xK.u', 'docente'),)");
    $stmt->execute([$username, $password, $rol]);

    echo "Usuario registrado correctamente.";
}
?>
