const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

//Middleware
userSchema.pre('save', async (next) =>{

    //Si la contraseña no ha sido modificada entonces no hace nada
    if(!this.isModified('password')) return next();

    try {
        //encriptando la contraseña
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
        
    } catch (error) {
        next(error);
    }

});

//Metodo para comparar la contraseña
userSchema.methods.matchPassword = async (enteredPassword)=> {
    return await bcrypt.compare(enteredPassword, this.password)
};

const User = mongoose.model('User', userSchema);

module.exports = User;
