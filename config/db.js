// db.js

require('dotenv').config();  // Asegúrate de que dotenv se cargue primero

const mongoose = require('mongoose');

const conexionDB = async function conexionDB() {
    try {
        const uri = process.env.MONGO_URI;  // Verifica que se esté obteniendo correctamente
        if (!uri) {
            console.error("MONGO_URI no está definido en el archivo .env");
            process.exit(1);
        }
        await mongoose.connect(uri);
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.log("Error al conectar la base de datos: ", error);
        process.exit(1);
    }
};

module.exports = conexionDB;
