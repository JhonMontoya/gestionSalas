const mongoose = require('mongoose');
const User = require("../models/usuario")


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
    dateStar: {
        type: Date,
        required: true,
    },
    dateEnd: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        require: true,

    }

});

//

const verificarUsuario = async (IdUser) => {

    try{
        const UserNow = await User.findById(IdUser);
        const nameNow = await User.findOne(User.name);

        if (UserNow){
            alert(`el usuario ${nameNow} ya tiene reservas activas`);
            return UserNow === true
        }else{
            alert(`el usuario ${nameNow} no tiene reservas vigentes`)
            return UserNow === false
        }
        
    }catch{
        alert(`el nombre de usuario ${UserNow} no existe`)
        
    }
    


}






const reservations = mongoose.model('reservations', reservationsSchema);

module.exports = reservations;