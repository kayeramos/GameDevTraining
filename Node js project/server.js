
const http = require('http');
const mongoose = require('mongoose');
const User = require('./models/User'); // Import the User model

const hostname = '127.0.0.1';
const port = 3000;

const dbUrl = 'mongodb://localhost:27017/company';

// Connect to MongoDB
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server is now running...\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
