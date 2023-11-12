const axios = require('axios');

const baseUrl = 'http://localhost:3000';

// Register a user
async function registerUser(firstName, lastName, email, password) {
  try {
    const response = await axios.post(`${baseUrl}/api/users/register`, {
      firstName,
      lastName,
      email,
      password,
    });

    console.log('User registered successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Verify a user
async function verifyUser(id, verificationCode) {
  try {
    const response = await axios.post(`${baseUrl}/api/users/verify`, {
      id,
      verificationCode,
    });

    console.log('User verified successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error verifying user:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Log in
async function loginUser(email, password) {
  try {
    const response = await axios.post(`${baseUrl}/api/sessions`, {
      email,
      password,
    });

    console.log('User logged in successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Get current user
async function getCurrentUser() {
  try {
    const response = await axios.get(`${baseUrl}/api/me`);

    console.log('Current User:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting current User:', error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = {
  registerUser,
  verifyUser,
  loginUser,
  getCurrentUser,
};
