const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescriptionController');
const authController = require('../controllers/authController');

router.post('/', authController.verifyToken, prescriptionController.createPrescription);
router.get('/', authController.verifyToken, prescriptionController.getAllPrescriptions);
router.get('/:id', authController.verifyToken, prescriptionController.getPrescriptionById);
router.put('/:id', authController.verifyToken, prescriptionController.updatePrescription);
router.delete('/:id', authController.verifyToken, prescriptionController.deletePrescription);

module.exports = router;
