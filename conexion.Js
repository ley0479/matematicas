// Importar el módulo mysql2
const mysql = require('mysql2');

// Crear la conexión con la base de datos
const connection = mysql.createConnection({
  host: 'localhost',           // Cambia esto si no usas localhost
  user: 'admin',          // El usuario de MySQL
  password: '1234',   // La contraseña del usuario
  database: 'matematicas_complejas' // El nombre de la base de datos a la que te quieres conectar
});

// Conectar a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Aquí puedes empezar a hacer consultas a la base de datos

// Realizar una consulta SQL
connection.query('SELECT * FROM users', (err, results, fields) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      return;
    }
    console.log('Resultados:', results);
  });
  
  // Cerrar la conexión una vez que hayas terminado
  connection.end();
  