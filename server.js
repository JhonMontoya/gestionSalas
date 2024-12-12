const express = require('express');
const dotnev = require('dotenv');
const cors = require ('cors');

const http = require('http');
const bodyParser = require('body-parser');

const conectDB = require('./config/db');

const routsUser = require('./routes/usuario');
const routRoom = require('./routes/sala');

dotnev.config();

const app = express();
const server = http.createServer(app);

conectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use('/usuarios', routsUser);
app.use('/salas', routRoom);

const PORT = process.env.PORT;

server.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
});