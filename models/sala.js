const mongoose = require('mongoose');

const salaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3, 
    maxlength: 50, 
  },
  status: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
    min: 1, 
  },
  url:{
    type: String,
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('Sala', salaSchema);