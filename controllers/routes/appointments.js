const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const authController = require('../controllers/authController');

router.post('/', authController.verifyToken, appointmentController.createAppointment);
router.get('/', authController.verifyToken, appointmentController.getAllAppointments);
router.get('/:id', authController.verifyToken, appointmentController.getAppointmentById);
router.put('/:id', authController.verifyToken, appointmentController.updateAppointment);
router.delete('/:id', authController.verifyToken, appointmentController.deleteAppointment);

module.exports = router;
