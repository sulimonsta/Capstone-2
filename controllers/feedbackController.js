const Feedback = require('../models/Feedback');

exports.createFeedback = (req, res) => {
  const newFeedback = new Feedback(req.body);
  newFeedback.save()
    .then(feedback => res.status(201).json(feedback))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.getAllFeedback = (req, res) => {
  Feedback.find()
    .then(feedback => res.json(feedback))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.getFeedbackById = (req, res) => {
  Feedback.findById(req.params.id)
    .then(feedback => {
      if (!feedback) return res.status(404).json({ error: 'Feedback not found' });
      res.json(feedback);
    })
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.updateFeedback = (req, res) => {
  Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(feedback => res.json(feedback))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.deleteFeedback = (req, res) => {
  Feedback.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Feedback deleted' }))
    .catch(err => res.status(400).json({ error: err.message }));
};
