const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const app = express();

// Conectar a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'matematicas_complejas'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

// Crear el servidor
app.use(express.json());

// Ruta para registrar usuarios
app.post('/register', (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
  connection.query(sql, [username, hashedPassword, role], (err, result) => {
    if (err) throw err;
    res.send('Usuario registrado');
  });
});

// Ruta para crear y actualizar preguntas
app.post('/preguntas', (req, res) => {
  const { pregunta, respuesta } = req.body;
  
  const sql = 'INSERT INTO preguntas (pregunta, respuesta) VALUES (?, ?)';
  connection.query(sql, [pregunta, respuesta], (err, result) => {
    if (err) throw err;
    res.send('Pregunta añadida');
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
