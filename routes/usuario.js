const express = require('express');

const router = express.Router();

const userController = require('../controllers/usuario');

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;