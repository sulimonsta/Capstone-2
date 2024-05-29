const Appointment = require('../models/Appointment');

exports.createAppointment = (req, res) => {
  const newAppointment = new Appointment(req.body);
  newAppointment.save()
    .then(appointment => res.status(201).json(appointment))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.getAllAppointments = (req, res) => {
  Appointment.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.getAppointmentById = (req, res) => {
  Appointment.findById(req.params.id)
    .then(appointment => {
      if (!appointment) return res.status(404).json({ error: 'Appointment not found' });
      res.json(appointment);
    })
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.updateAppointment = (req, res) => {
  Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(appointment => res.json(appointment))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.deleteAppointment = (req, res) => {
  Appointment.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Appointment deleted' }))
    .catch(err => res.status(400).json({ error: err.message }));
};
