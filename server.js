require('dotenv').config();  // Dotenv esté al principio

const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const conectDB = require('./config/db');
const routsUser = require('./routes/usuario');
const routRoom = require('./routes/salaRouter');

const app = express();
const server = http.createServer(app);

conectDB();  // Conectar la base de datos

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/usuarios', routsUser);
app.use('/salas', routRoom);

const PORT = process.env.PORT || 5000;  // Usar 5000 por defecto

server.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
