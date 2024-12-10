const mongoose = require('mongoose');
const User = require("../models/usuario")
const Rooms = require("../models/salaModel")


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
const UserId = document.getElementById("#").value;
const userName = document.getElementById("#").value;
const roomId = document.getElementById("#").value;
const roomName = document.getElementById("#").value;





const verifications = async (UserId,userName,roomId,roomName) => {

    try{
        const UserId = await User.findById();
        const userName = await User.findOne(userName);
        const roomId = await Rooms.findById();
        const roomName = await Rooms.findById(roomName);


        if (UserId || roomId ){
            alert(`el Usuario con Id: ${UserId} y sala con Id : ${roomId} ya tiene resevas activas`);
            return UserId === true && roomId === true;
        }else{
            console.log("la sala y el usuario no estan registrados")
            return UserNow === false && roomId === false;
            
        }
        
    }catch (err){
        alert(`el Id : ${UserId} no existe`)
        console.log(new Error(err));
        
    }
    


}






const reservations = mongoose.model('reservations', reservationsSchema);

module.exports = {reservations, verifications}