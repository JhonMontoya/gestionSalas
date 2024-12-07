const mongoose = require('mongoose');

const salaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    // type: Boolean,
    // default: false, 
    // required: true,
    type: String,
    default: "Disponible",
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  capacity:{
    type: Number,
    required: true,
  }
}, { versionKey: false }); 

module.exports = mongoose.model('Sala', salaSchema);

