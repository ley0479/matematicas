const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const app = express();

app.use(express.json());

// Conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'matematicas_complejas'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

// Login de usuario
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Buscar el usuario en la base de datos
  const sql = 'SELECT * FROM users WHERE username = ?';
  connection.query(sql, [username], (err, results) => {
    if (err) throw err;
    
    if (results.length > 0) {
      const user = results[0];
      
      // Verificar la contraseña
      if (bcrypt.compareSync(password, user.password)) {
        // Generar un token JWT
        const token = jwt.sign({ username: user.username, role: user.role }, 'secretKey');
        
        // Enviar el token y el rol del usuario
        res.json({ token, role: user.role });
      } else {
        res.json({ message: 'Contraseña incorrecta' });
      }
    } else {
      res.json({ message: 'Usuario no encontrado' });
    }
  });
});

// Middleware para verificar el token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) return res.sendStatus(403);
    
    req.user = user;
    next();
  });
};

// Middleware para verificar el rol
const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) return res.sendStatus(403);
    next();
  };
};

// Ruta para el panel de administrador (solo administradores)
app.get('/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
  res.send('Bienvenido al Panel de Administrador');
});

// Ruta para el panel de profesor (solo profesores)
app.get('/profesor', authenticateToken, authorizeRole('profesor'), (req, res) => {
  res.send('Bienvenido al Panel de Profesor');
});

// Ruta para el panel de estudiante (solo estudiantes)
app.get('/estudiante', authenticateToken, authorizeRole('estudiante'), (req, res) => {
  res.send('Bienvenido al Panel de Estudiante');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
