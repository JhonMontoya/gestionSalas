//Requerimos el modulo de mongo para la conexion a la base de datos
const mongoose = require('mongoose');
require('dotenv').config();

const conexionDB = async function conexionDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.log("Error al conectar la base de datos: ", error);
        process.exit(1);
    }
    
}

module.exports = conexionDB;