const reservas = require("../models/reserva");

//metodo Get

const reservaGet = async (req,res) => {
    try{
        const reserva = await reservas.find();
        req.status(200).json(reserva);
    }catch (error){
        console.error(error);
        res.status(500).json({error: "error al obtener las reservas"})

    }
}

//traer reservas por ID

const reservasGet = async (req,res) => {
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

const createRerserva = async (req,res) => {
    const email = document.getElementById("#").value;
    const available = ["activo","cancelado"];
    
    if(!req.body.dateStar || !req.body.dateEnd || !req.body.status){
        return res.status(400).json({ error: 'Campos necesarios' });
    }if (available[0].includes(req.body.status)){
        alert(`la sala ${req.body.id} ya se encuentra reservada`)
    }

    
}