const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

const dbUrl = 'mongodb://localhost:27017/company';

// Connect to MongoDB
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Import and use employeeRoutes
const employeeRoutes = require('./routes/employeeRoutes');
app.use(bodyParser.json());

// Keep this line to import the Employee model
const Employee = require('./models/employee');

app.use(employeeRoutes);

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
