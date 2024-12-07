const Sala = require('../models/sala'); 

const getSalas = async (req, res) => {
  try {
    const salas = await Sala.find(); 
    res.status(200).json(salas);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Error al obtener las salas' });
  }
};

const getSala = async (req, res) => {
  try {
    const sala = await Sala.findById(req.params.id);
    if (!sala) {
      return res.status(404).json({ error: 'Sala no encontrada' });
    }
    res.status(200).json(sala);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Error al obtener la sala' });
  }
};

// const createSala = async (req, res) => {
//   try {
//     const newSala = new Sala(req.body);
//     await newSala.save();
//     res.status(201).json(newSala);
//   } catch (error) {
//     console.error(error); 
//     res.status(400).json({ error: 'Error al crear la sala' });
//   }
// };

// const updateSala = async (req, res) => {
//   try {
//     const sala = await Sala.findById(req.params.id);
//     if (!sala) {
//       return res.status(404).json({ error: 'Sala no encontrada' });
//     }

//     sala.name = req.body.name || sala.name;
//     if (req.body.status !== undefined) {
//       sala.status = req.body.status;
//     }
//     sala.location = req.body.location || sala.location;

//     await sala.save();
//     res.status(200).json({ mensaje: `${sala.name} actualizada correctamente` });
//   } catch (error) {
//     console.error(error); 
//     res.status(400).json({ error: 'Error al actualizar la sala' });
//   }
// };

const createSala = async (req, res) => {
  try {
      const allowedStatuses = ['disponible', 'ocupada', 'en mantenimiento', 'reservada'];

      // Validación de entrada
      if (!req.body.name || !req.body.status || !req.body.location || !req.body.capacity) {
          return res.status(400).json({ error: 'Faltan campos requeridos' });
      }
      if (!allowedStatuses.includes(req.body.status)) {
          return res.status(400).json({ error: 'Estado de sala no válido' });
      }

      const newSala = new Sala({
          name: req.body.name,
          status: req.body.status,
          location: req.body.location,
          capacity: req.body.capacity,
      });

      await newSala.save();
      res.status(201).json(newSala);
  } catch (error) {
      console.error(error);
      if (error.name === 'ValidationError') {
          // Manejar errores de validación de Mongoose
          return res.status(400).json({ error: error.message });
      } else {
          // Manejar otros errores
          return res.status(500).json({ error: 'Error al crear la sala' });
      }
  }
};

const updateSala = async (req, res) => {
    try {
      const sala = await Sala.findById(req.params.id);
      if (!sala) {
        return res.status(404).json({ error: 'Sala no encontrada' });
      }
  
      sala.name = req.body.name || sala.name;
      if (req.body.status && ['disponible', 'ocupada', 'en mantenimiento', 'reservada'].includes(req.body.status)) {
        sala.status = req.body.status;
      }
      sala.location = req.body.location || sala.location;
  
      await sala.save();
      res.status(200).json({ mensaje: `${sala.name} actualizada correctamente` });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Error al actualizar la sala' });
    }
  };

module.exports = {
  getSalas,
  getSala,
  createSala,
  updateSala,
};