const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authController = require('../controllers/authController');

router.post('/', authController.verifyToken, doctorController.createDoctor);
router.get('/', doctorController.getAllDoctors);
router.get('/:id', doctorController.getDoctorById);
router.put('/:id', authController.verifyToken, doctorController.updateDoctor);
router.delete('/:id', authController.verifyToken, doctorController.deleteDoctor);

module.exports = router;
