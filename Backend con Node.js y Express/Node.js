const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Simulando una base de datos de usuarios.
const users = [
  { username: 'admin', password: '1234' },
  { username: 'profesor', password: 'pass123' },
];

// Middleware para analizar JSON.
app.use(bodyParser.json());

// Ruta para manejar la autenticación de inicio de sesión.
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Buscar el usuario en la base de datos simulada.
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Si el usuario es encontrado y las credenciales son correctas, responder con éxito.
    res.json({ success: true });
  } else {
    // Si no se encuentra o las credenciales son incorrectas, devolver error.
    res.json({ success: false });
  }
});

// Iniciar el servidor.
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
