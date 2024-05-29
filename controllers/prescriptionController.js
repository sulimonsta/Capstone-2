const Prescription = require('../models/Prescription');

exports.createPrescription = (req, res) => {
  const newPrescription = new Prescription(req.body);
  newPrescription.save()
    .then(prescription => res.status(201).json(prescription))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.getAllPrescriptions = (req, res) => {
  Prescription.find()
    .then(prescriptions => res.json(prescriptions))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.getPrescriptionById = (req, res) => {
  Prescription.findById(req.params.id)
    .then(prescription => {
      if (!prescription) return res.status(404).json({ error: 'Prescription not found' });
      res.json(prescription);
    })
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.updatePrescription = (req, res) => {
  Prescription.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(prescription => res.json(prescription))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.deletePrescription = (req, res) => {
  Prescription.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Prescription deleted' }))
    .catch(err => res.status(400).json({ error: err.message }));
};
