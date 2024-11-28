const user = require('../models/usuario');

const getUsers = async(req, res) =>{
    try {
        const usuarios = await user.find(); /*.*/
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({error: 'Error  al obtener los usuarios'});
    }
};

const createUser = async(req, res) => {
    try {
        const usuario = new user(req.body);
        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({error: "No se pudo crear el usuario"});
    }
};

module.exports = {
    getUsers,
    createUser,
};