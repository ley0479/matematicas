const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',      // Cambia esto si tu base de datos está en otro lugar
  user: 'admin',           // Cambia esto según tu usuario de MySQL
  password: '1234',           // Cambia esto según tu contraseña de MySQL
  database: 'matematicas_complejas' // Nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Resto de tu código aquí (routes, etc.)

// Ejemplo de ruta para registrar usuarios
app.post('/register', (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10); // Encriptar contraseña

  const sql = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
  connection.query(sql, [username, hashedPassword, role], (err, result) => {
    if (err) {
      console.error('Error al registrar el usuario:', err);
      return res.status(500).json({ message: 'Error al registrar el usuario' });
    }
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    const sql = 'SELECT * FROM users WHERE username = ?';
    connection.query(sql, [username], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error al verificar usuario' });
      }
      if (results.length > 0) {
        const user = results[0];
        // Comparar la contraseña
        if (bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign({ username: user.username, role: user.role }, 'secretKey');
          res.json({ token, role: user.role });
        } else {
          res.status(401).json({ message: 'Contraseña incorrecta' });
        }
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Importar las dependencias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

// Configurar OpenAI con la clave de API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Inicializar la app Express
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Ruta para manejar la llamada a la API de OpenAI
app.post('/api/chatgpt', async (req, res) => {
  const { question } = req.body;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003', // Modelo de GPT a usar
      prompt: question,
      max_tokens: 100, // Controla la cantidad de palabras
    });

    res.json({ answer: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la respuesta de OpenAI' });
  }
});

// Iniciar el servidor
app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});

    });
  });
  