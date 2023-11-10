
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust 

// Handle user registration
router.post('/api/users', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = new User({ firstName, lastName, email, password });

  newUser.save()
    .then(user => res.json(user))
    .catch(error => res.status(400).json({ error: error.message }));
});



module.exports = router;
