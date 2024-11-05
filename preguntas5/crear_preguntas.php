<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Añadir Preguntas</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            margin-bottom: 30px;
            color: #333;
        }

        label {
            font-weight: bold;
            color: #555;
        }

        textarea, input[type="text"], input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 20px;
            border: 1px solid #ced4da;
            border-radius: 5px;
            box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.1);
        }

        input[type="submit"] {
            display: inline-block;
            background: linear-gradient(145deg, #007bff, #0056b3);
            color: #fff;
            border: none;
            padding: 12px 20px;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2),
                        -5px -5px 10px rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            width: 100%;
        }

        input[type="submit"]:hover {
            background: linear-gradient(145deg, #0056b3, #007bff);
            transform: translateY(-2px);
        }

        input[type="submit"]:active {
            box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.3),
                        inset -3px -3px 5px rgba(255, 255, 255, 0.2);
            transform: translateY(2px);
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Añadir Preguntas</h1>
        <form action="procesar_pregunta.php" method="POST">
            <div class="mb-3">
                <label for="pregunta">Pregunta:</label>
                <textarea name="pregunta" id="pregunta" rows="4" required></textarea>
            </div>

            <div class="mb-3">
                <label for="opcion1">Opción 1:</label>
                <input type="text" name="opcion1" id="opcion1" required>
            </div>

            <div class="mb-3">
                <label for="opcion2">Opción 2:</label>
                <input type="text" name="opcion2" id="opcion2" required>
            </div>

            <div class="mb-3">
                <label for="opcion3">Opción 3:</label>
                <input type="text" name="opcion3" id="opcion3" required>
            </div>

            <div class="mb-3">
                <label for="opcion4">Opción 4:</label>
                <input type="text" name="opcion4" id="opcion4" required>
            </div>

            <div class="mb-3">
                <label for="respuesta_correcta">Respuesta Correcta (1-4):</label>
                <input type="number" name="respuesta_correcta" id="respuesta_correcta" min="1" max="4" required>
            </div>

            <input type="submit" value="Añadir Pregunta">
        </form>
    </div>
</body>
</html>
