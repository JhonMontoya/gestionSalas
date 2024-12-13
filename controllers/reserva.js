const reservas = require("../models/reserva");
const salas =require("../models/salaModel");
const users = require ("../models/usuario");

//metodo Get

const reservasGet = async (req,res) => {
    try{
        const reserva = await reservas.find();
        res.status(200).json(reserva);
    }catch (error){
        console.error(error);
        res.status(500).json({error: "error al obtener las reservas"})

    }
}

//traer reservas por ID

const reservaGet = async (req,res) => {
    const reservaId = await reservas.findById(req.params.id);

    try{
        if(!reservaId ){
            return res.status(500).json({error : "reserva no encontrada"});
        }
        res.status(200).json(reservaId)
    }catch(error){
        console.log(error)
        res.status(400).json({error: "Reserva no encontrada"})
    }

}

//crear reserva

const createRerserva = async (req,res,email) => {
    try{
    
    
    const available = ["activo","inactivo"];
    
    if(!req.body.dateStart || !req.body.dateEnd || !req.body.status){
        return res.status(400).json({ error: 'Campos necesarios' });
    }if (available[0].includes(salas.status)){
        alert(`la sala ${salas.name} ya se encuentra reservada`)
        return res.status(400).json({error : `la sala ${salas.name} ya se encuentra reservada`})
    }
    const newReserva = new reservas({
        IdUser: req.body.IdUser,
        IdSala : req.body.IdSala,
        dateStart : req.body.dateStart,
        dateEnd : req.body.dateEnd,
        status : req.body.status,
    });
    await newReserva.save();
    res.status(200).json(newReserva);
    }catch (error){
        console.error(error)
        if (error.name === "ValidationError"){
            return res.satatus(400).json({error:error.message})
        }else{
            return res.status(500).json({ error: 'Error al crear la reserva' });
        }
    }



    
}
 const updateReservas = async (req,res) => {
    try{
        const updatereserva = await reservas.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatereserva){
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        reservas.status = req.body.status || reservas.status
        if(reservas.status && ["activo","cancelado"].includes(req.body.status)){
            reservas.status = req.body.status
        }
        
        res.status(200).json({ mensaje: `reserva actualizada correctamente` });

    }catch(error){
        console.error(error);
      res.status(400).json({ error: 'Error al actualizar la reserva' });
    }
 }

 const deletelReserva = async (req,res) => {
    
    try{
    const reservasId = await reservas.findByIdAndDelete(req.params.id);
    if (!reservasId){
        return res.status(404).json({error: "Reserva no encontrada"})
    }
    
    res.status(200).json({ mensaje: `Reserva eliminada correctamente` });
    }catch (error){
        console.error(error);
        res.status(400).json({ error: 'Error al eliminar la reserva' }); 
    }
 }

 module.exports ={
    reservaGet,
    reservasGet,
    createRerserva,
    updateReservas,
    deletelReserva
 }
