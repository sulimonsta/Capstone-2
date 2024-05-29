const Doctor = require('../models/Doctor');

exports.createDoctor = (req, res) => {
  const newDoctor = new Doctor(req.body);
  newDoctor.save()
    .then(doctor => res.status(201).json(doctor))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.getAllDoctors = (req, res) => {
  Doctor.find()
    .then(doctors => res.json(doctors))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.getDoctorById = (req, res) => {
  Doctor.findById(req.params.id)
    .then(doctor => {
      if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
      res.json(doctor);
    })
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.updateDoctor = (req, res) => {
  Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(doctor => res.json(doctor))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.deleteDoctor = (req, res) => {
  Doctor.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Doctor deleted' }))
    .catch(err => res.status(400).json({ error: err.message }));
};
