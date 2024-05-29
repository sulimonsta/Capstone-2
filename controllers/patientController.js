const Patient = require('../models/Patient');

exports.createPatient = (req, res) => {
  const newPatient = new Patient(req.body);
  newPatient.save()
    .then(patient => res.status(201).json(patient))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.getAllPatients = (req, res) => {
  Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.getPatientById = (req, res) => {
  Patient.findById(req.params.id)
    .then(patient => {
      if (!patient) return res.status(404).json({ error: 'Patient not found' });
      res.json(patient);
    })
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.updatePatient = (req, res) => {
  Patient.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(patient => res.json(patient))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.deletePatient = (req, res) => {
  Patient.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Patient deleted' }))
    .catch(err => res.status(400).json({ error: err.message }));
};
