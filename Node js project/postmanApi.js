const axios = require('axios');

const baseUrl = 'http://localhost:3000'; 

// Function to register a user
async function registerUser(firstName, lastName, email, password, passwordConfirmation) {
  try {
    const response = await axios.post(`${baseUrl}/api/users`, {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
    });
    

    console.log('User registered successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function to verify a user
async function verifyUse(userId, verificationCode) {
  try {
    const response = await axios.post(`${baseUrl}/api/users/verify/${userId}/${verificationCode}`, {});

    console.log('User verified successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error verifying user:', error.response ? error.response.data : error.message);
    throw error;
  }
}


// Function to log in
async function loginUser(email, password) {
  try {
    const response = await axios.post(`${baseUrl}/api/sessions`, { email, password });

    console.log('User logged in successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function to get current user
async function getCurrentUser() {
  try {
    const response = await axios.get(`${baseUrl}/api/me`);

    console.log('Current user:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting current user:', error.response ? error.response.data : error.message);
    throw error;
  }
}

