const { encrypt, compare } = require('../helpers/handleBcrypt');
const Users = require('../models/usuario');


const getUsers = async (req, res) => {
    try {
        const usuarios = await Users.find(); /*.*/
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error  al obtener los usuarios' });
    }
};

const getUser = async (req, res) => {
    try {
        const usuario = await Users.findById(req.params.id); /*.*/
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error  al obtener el usuario' });
    }
};

const register = async (req, res) => {
    try {
        const { name, email, role, password } = req.body
        const passwordHash = await encrypt(password)
        const registerUser = await Users.create({
            name,
            email,
            role,
            password: passwordHash
        })
        res.status(201).json({message: "Usuario registrado correctamente"});
    } catch (e) {

    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const usuario = await Users.findOne({ email })

        if (!usuario) {
            res.status(404).json({message: "No se encontró el usuario"});
        }

        const checkPassword = await compare(password, usuario.password)
        if (checkPassword) {
            res.send(
                {
                    data: usuario
                })
            return
        }
        if (!checkPassword) {
            res.status(409).json({message: "Contraseña incorrecta"});
            return
        }
    } catch (e) {

    }
}
const updateUser = async (req, res) => {
    try {
        const usuario = await Users.findById(req.params.id);
        if (!usuario) return res.status(404).json({ error: "usuario no encontrado" });

        //incorporamos los para paremetros
        usuario.name = req.body.name || usuario.name;
        usuario.email = req.body.email || usuario.email;
        //queda pendiente la validación del rol para que solo admin puedan ejecutar esta acción
        usuario.role = req.body.role || usuario.role;

        req.body.password && (usuario.password = req.body.password);

        await usuario.save();
        res.status(200).json({ mensaje: `${usuario.name} actualizado correctamente` });
    } catch (error) {
        res.status(400).json({ error: "El usuario no pudo ser actualizado" });
    }
};

const deleteUser = async (req, res) => {
    try {
        const usuario = await Users.findById(req.params.id);
        if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });

        await usuario.deleteOne();

        res.status(200).json({ mensaje: `${usuario.name} eliminado correctamente` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al eliminar el usuario" });

    }
};

module.exports = {
    getUsers,
    getUser,
    register,
    login,
    updateUser,
    deleteUser,
};