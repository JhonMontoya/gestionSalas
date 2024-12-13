const mongoose = require('mongoose');
//const User = require("../models/usuario")
//const Rooms = require("../models/salaModel")


const reservationsSchema = new mongoose.Schema({
    IdUser: {
        type: String,
        required: true,
    },
    IdSala: {
        type: String,
        required: true,
        unique: true,
    },
    dateStart: {
        type: String,
        required: true,
    },
    dateEnd: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        require: true,

    }

});

//const reservations = mongoose.model('reservations', reservationsSchema);


module.exports = mongoose.model("reserva",reservationsSchema);