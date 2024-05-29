const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const config = require('../config');

exports.register = (req, res) => {
  const { username, password, role } = req.body;
  const newUser = new User({ username, password: bcrypt.hashSync(password, 8), role });

  newUser.save()
    .then(user => {
      const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: 86400 });
      res.status(201).json({ auth: true, token });
    })
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then(user => {
      if (!user) return res.status(404).json({ error: 'User not found' });

      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) return res.status(401).json({ auth: false, token: null });

      const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: 86400 });
      res.json({ auth: true, token });
    })
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).json({ auth: false, message: 'No token provided' });

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token' });
    req.userId = decoded.id;
    next();
  });
};
