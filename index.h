<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Control</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- FontAwesome CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Estilos personalizados -->
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8f9fa;
        }

        /* Sidebar */
        #sidebar {
            width: 250px;
            background-color: #343a40;
            color: white;
            min-height: 100vh;
            position: fixed;
        }

        #sidebar .sidebar-header {
            padding: 20px;
            background-color: #3c4043;
            text-align: center;
        }

        #sidebar ul.components {
            padding: 0;
            margin: 0;
            list-style: none;
        }

        #sidebar ul li {
            padding: 15px;
            font-size: 16px;
        }

        #sidebar ul li a {
            color: white;
            display: block;
            text-decoration: none;
        }

        #sidebar ul li a:hover {
            background-color: #495057;
            text-decoration: none;
        }

        /* Contenido */
        #content {
            margin-left: 250px;
            padding: 20px;
        }

        .navbar {
            background-color: #343a40;
        }

        .navbar-brand {
            color: white !important;
        }

        .navbar-brand:hover {
            color: #ddd !important;
        }

        .card {
            margin-bottom: 20px;
            border-radius: 10px;
        }

        .card h4 {
            margin-bottom: 15px;
        }

        .content-header {
            padding: 20px;
            background-color: white;
            margin-bottom: 20px;
            border-radius: 5px;
        }

        /* Carrusel */
        .carousel-item img {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }

        /* Footer */
        footer {
            background-color: #343a40;
            color: white;
            padding: 15px 0;
            text-align: center;
        }

        footer a {
            color: #ffc107;
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }

        /* Botón de acción flotante */
        .btn-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #007BFF;
            color: white;
            border-radius: 50%;
            padding: 15px;
            font-size: 24px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .btn-float:hover {
            background-color: #0056b3;
        }

        /* Gráficos */
        .chart-container {
            position: relative;
            height: 300px;
            width: 100%;
            margin-bottom: 20px;
        }

        /* Estilos de la tabla */
        .table thead th {
            background-color: #007BFF;
            color: white;
        }

        .table tbody td {
            padding: 10px;
        }
    </style>
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-dark fixed-top">
        <a class="navbar-brand" href="#">Software Didáctico Matemáticas Especiales - Profesora Nancy González</a>
    </nav>

    <!-- Sidebar -->
    <div id="sidebar">
        <div class="sidebar-header">
            <h3>Panel de Control</h3>
        </div>
        <ul class="components">
            <li><a href="#"><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
            <li><a href="#"><i class="fas fa-user"></i> Gestión de Usuarios</a></li>
            <li><a href="#"><i class="fas fa-question-circle"></i> Preguntas Interactivas</a></li>
            <li><a href="#"><i class="fas fa-gamepad"></i> Juegos de Conocimientos</a></li>
            <li><a href="#"><i class="fas fa-calculator"></i> Calculadora Compleja</a></li>
            <li><a href="#"><i class="fas fa-cogs"></i> Función Compleja #1</a></li>
            <li><a href="#"><i class="fas fa-cogs"></i> Función Compleja #2</a></li>
            <li><a href="file:///D:/dash_2024/200TEMPLEATES%20dashboard/200%20TEMPLEATES/a132/thebootstrapthemes-portfolio/index.html"><i class="fas fa-gamepad"></i> Suma de Números Complejos</a></li>
            <li><a href="file:///C:/xampp2/htdocs/matematicas/SUCESIONES/index.html"><i class="fas fa-gamepad"></i> Sucesiones</a></li>
        </ul>
    </div>

    <!-- Contenido principal -->
    <div id="content">
        <div class="container-fluid">

            <!-- Encabezado -->
            <div class="content-header">
                <h2>Bienvenido al Panel de Control</h2>
                <p>Gestiona las principales funciones de tu proyecto.</p>
            </div>

            <!-- Carrusel de imágenes -->
            <div id="carouselExampleControls" class="carousel slide mb-4" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="C:\xampp2\htdocs\matematicas\IMAGENES\2 Captura de pantalla 2024-10-21 215338.jpg" alt="Primera imagen">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="C:\xampp2\htdocs\matematicas\IMAGENES\3 Captura de pantalla 2024-10-21 215937.jpg" alt="Segunda imagen">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="C:\xampp2\htdocs\matematicas\IMAGENES\4 Captura de pantalla 2024-10-21 220130.jpg" alt="Tercera imagen">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="C:\xampp2\htdocs\matematicas\IMAGENES\5 Captura de pantalla 2024-10-21 220351.jpg" alt="Cuarta imagen">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="C:\xampp2\htdocs\matematicas\IMAGENES\6 Captura de pantalla 2024-10-21 220548.jpg" alt="Quinta imagen">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="C:\xampp2\htdocs\matematicas\IMAGENES\8 Captura de pantalla 2024-10-21 221206.jpg" alt="Sexta imagen">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="C:\xampp2\htdocs\matematicas\IMAGENES\9 Captura de pantalla 2024-10-21 221314.jpg" alt="Séptima imagen">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="C:\xampp2\htdocs\matematicas\IMAGENES\Captura de pantalla 2024-10-21 214746.jpg" alt="Octava imagen">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Anterior</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Siguiente</span>
                </a>
            </div>

            <!-- Tarjetas informativas -->
            <div class="row">
                <div class="col-md-4">
                    <div class="card text-white bg-primary shadow">
                        <div class="card-body">
                            <h4 class="card-title"><i class="fas fa-users"></i> Usuarios Registrados</h4>
                            <p class="card-text" id="usuarios">Total: 35</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-white bg-success shadow">
                        <div class="card-body">
                            <h4 class="card-title"><i class="fas fa-question-circle"></i> Preguntas Totales</h4>
                            <p class="card-text" id="preguntas">Total: 120</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-white bg-danger shadow">
                        <div class="card-body">
                            <h4 class="card-title"><i class="fas fa-chart-bar"></i> Análisis de Resultados</h4>
                            <p class="card-text" id="analisis">Ver análisis detallado</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Gráficos -->
            <h3>Gráficos de Progreso</h3>
            <div class="chart-container">
                <canvas id="miGrafico"></canvas>
            </div>

            <!-- Tabla de resultados -->
            <h3>Resultados de los Estudiantes</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Calificación</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Estudiante 1</td>
                        <td>85</td>
                        <td>2024-10-21</td>
                    </tr>
                    <tr>
                        <td>Estudiante 2</td>
                        <td>90</td>
                        <td>2024-10-21</td>
                    </tr>
                    <tr>
                        <td>Estudiante 3</td>
                        <td>78</td>
                        <td>2024-10-21</td>
                    </tr>
                </tbody>
            </table>

            <!-- Botón de acción flotante -->
            <a href="#" class="btn-float"><i class="fas fa-plus"></i></a>

        </div>
    </div>

    <!-- jQuery, Popper.js, Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.10/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // Gráfico de progreso
        var ctx = document.getElementById('miGrafico').getContext('2d');
        var miGrafico = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Estudiante 1', 'Estudiante 2', 'Estudiante 3'],
                datasets: [{
                    label: 'Calificaciones',
                    data: [85, 90, 78],
                    backgroundColor: 'rgba(0, 123, 255, 0.7)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>
    
</body>

</html>
