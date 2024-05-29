const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const authController = require('../controllers/authController');

router.post('/', authController.verifyToken, patientController.createPatient);
router.get('/', authController.verifyToken, patientController.getAllPatients);
router.get('/:id', authController.verifyToken, patientController.getPatientById);
router.put('/:id', authController.verifyToken, patientController.updatePatient);
router.delete('/:id', authController.verifyToken, patientController.deletePatient);

module.exports = router;
