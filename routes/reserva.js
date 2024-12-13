const express = require('express');
const router = express.Router();
const reservas = require("../controllers/reserva");


router.post("/",reservas.createRerserva );
router.get("/", reservas.reservasGet);
router.get("/:id", reservas.reservaGet);
router.put("/:id", reservas.updateReservas);
router.delete("/:id",reservas.deletelReserva);

module.exports = router;