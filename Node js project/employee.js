const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/user_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema for the user
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

// Model based on the schema
const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

// Endpoint for registering a user
app.post('/api/users/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const newUser = new User({ firstName, lastName, email, password });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint for verifying a user (placeholder, you need to implement actual verification logic)
app.post('/api/users/verify', async (req, res) => { // /api/users/verify/:id/:verificationCode
  const { id, verificationCode } = req.body;

  try {
    // Implement logic to verify user using id and verificationCode
    // For simplicity, let's assume verification is successful
    res.status(200).json({ message: 'User verified successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint for user login (placeholder, you need to implement actual login logic)
app.post('/api/sessions', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Implement logic to check if email and password match a user in the database
    // For simplicity, let's assume login is successful
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

// Endpoint for getting the current user (placeholder, you need to implement actual logic)
app.get('/api/me', async (req, res) => {
  try {
    // Implement logic to get the current user based on authentication
    // For simplicity, let's assume a user is always authenticated
    const currentUser = await User.findOne({ email: 'test@example.com' });
    res.status(200).json(currentUser);
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
