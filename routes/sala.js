const express = require('express');

const router = express.Router();

const salaController = require('../controllers/sala');

router.post('/', salaController.createSala);
router.get('/', salaController.getSalas);
router.get('/:id', salaController.getSala);
router.put('/:id', salaController.updateSala);
router.delete('/:id', salaController.deleteSala);

module.exports = router;