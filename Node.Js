const express = require('express');  // Importa el framework Express para manejar rutas y solicitudes HTTP
const bcrypt = require('bcrypt');    // Importa bcrypt para el hash de contraseñas
const jwt = require('jsonwebtoken'); // Para autenticación basada en tokens JWT (JSON Web Tokens)
const mysql = require('mysql');      // Importa mysql para conectar y operar con la base de datos MySQL
const app = express();               // Crea una instancia de la aplicación Express
app.use(express.json());             // Middleware para parsear las solicitudes que vienen en formato JSON

// Conectar a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',                 // El servidor donde se aloja la base de datos
  user: 'root',                      // El usuario para acceder a la base de datos
  password: '',                      // Contraseña del usuario (vacía en este caso)
  database: 'matematicas_complejas'  // Nombre de la base de datos
});

connection.connect((err) => {
  if (err) throw err;                // Si hay un error en la conexión, se arroja
  console.log('Conectado a la base de datos');  // Confirma la conexión exitosa
});

// Middleware de autenticación (verifica si hay un token en la solicitud)
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];  // Toma el token del header de autorización
  if (!token) return res.sendStatus(401);      // Si no hay token, responde con un estado 401 (no autorizado)

  jwt.verify(token, 'secretKey', (err, user) => {  // Verifica si el token es válido
    if (err) return res.sendStatus(403);  // Si el token es inválido, responde con un 403 (prohibido)
    req.user = user;                      // Si es válido, guarda la información del usuario en req.user
    next();                               // Continúa con la siguiente función
  });
};

// Middleware de autorización según el rol (verifica si el usuario tiene un rol permitido)
const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {         // Compara el rol del usuario con el rol permitido
      return res.sendStatus(403);         // Si no coincide, responde con un 403
    }
    next();                               // Si coincide, continúa con la siguiente función
  };
};

// Registrar usuario (guarda un nuevo usuario en la base de datos)
app.post('/register', (req, res) => {
  const { username, password, role } = req.body;    // Toma los datos enviados en la solicitud
  const hashedPassword = bcrypt.hashSync(password, 10);  // Cifra la contraseña con bcrypt

  const sql = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)'; // Query SQL para insertar un nuevo usuario
  connection.query(sql, [username, hashedPassword, role], (err, result) => {   // Ejecuta la query con los valores proporcionados
    if (err) throw err;                   // Si hay un error en la inserción, lo lanza
    res.send('Usuario registrado');       // Responde con un mensaje de éxito
  });
});

// Login de usuario (genera un token JWT)
app.post('/login', (req, res) => {
  const { username, password } = req.body;  // Toma el username y password de la solicitud
  const sql = 'SELECT * FROM users WHERE username = ?';  // Query SQL para buscar el usuario por username
  connection.query(sql, [username], (err, results) => {  // Ejecuta la query con el username
    if (err) throw err;                    // Si hay error en la consulta, lo lanza
    if (results.length > 0) {              // Si se encuentra el usuario en la base de datos
      const user = results[0];             // Guarda el primer resultado como usuario
      if (bcrypt.compareSync(password, user.password)) {  // Compara la contraseña ingresada con la guardada en la BD
        const token = jwt.sign({ username: user.username, role: user.role }, 'secretKey');  // Genera un token con el username y role
        res.json({ token });               // Responde con el token generado
      } else {
        res.send('Contraseña incorrecta');  // Si la contraseña es incorrecta, envía un mensaje de error
      }
    } else {
      res.send('Usuario no encontrado');    // Si no se encuentra el usuario, envía un mensaje de error
    }
  });
});

// Crear y actualizar preguntas (solo accesible para administradores)
app.post('/preguntas', authenticateToken, authorizeRole('admin'), (req, res) => {
  const { pregunta, respuesta } = req.body;           // Toma la pregunta y respuesta de la solicitud
  const sql = 'INSERT INTO preguntas (pregunta, respuesta) VALUES (?, ?)';  // Query SQL para insertar una nueva pregunta
  connection.query(sql, [pregunta, respuesta], (err, result) => {  // Ejecuta la query
    if (err) throw err;                  // Si hay un error, lo lanza
    res.send('Pregunta añadida');        // Responde con un mensaje de éxito
  });
});

// Obtener todas las preguntas (accesible para usuarios autenticados)
app.get('/preguntas', authenticateToken, (req, res) => {
  const sql = 'SELECT * FROM preguntas';  // Query SQL para obtener todas las preguntas
  connection.query(sql, (err, results) => {  // Ejecuta la query
    if (err) throw err;                // Si hay un error, lo lanza
    res.json(results);                 // Responde con todas las preguntas en formato JSON
  });
});

// Eliminar una pregunta (solo accesible para administradores)
app.delete('/preguntas/:id', authenticateToken, authorizeRole('admin'), (req, res) => {
  const { id } = req.params;            // Toma el id de la pregunta de los parámetros de la URL
  const sql = 'DELETE FROM preguntas WHERE id = ?';  // Query SQL para eliminar la pregunta con el id dado
  connection.query(sql, [id], (err, result) => {     // Ejecuta la query
    if (err) throw err;                // Si hay un error, lo lanza
    res.send('Pregunta eliminada');    // Responde con un mensaje de éxito
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');  // Inicia el servidor en el puerto 3000 y muestra un mensaje de confirmación
});
