const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  rating: { type: Number, required: true },
  comment: { type: String }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
