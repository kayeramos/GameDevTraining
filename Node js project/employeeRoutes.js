const express = require('express');
const router = express.Router();
const Employee = require('../models/employee'); 

// Handle Employee registration
router.post('/api/employees', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newEmployee = new Employee({ firstName, lastName, email, password });

  newEmployee.save()
    .then(employee => res.status(201).json(employee))
    .catch(error => res.status(400).json({ error: error.message }));
});

module.exports = router;
