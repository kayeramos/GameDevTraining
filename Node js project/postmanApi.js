const axios = require('axios');

const baseUrl = 'http://localhost:3000'; 

// Function to register an Employee
async function registerEmployee(firstName, lastName, email, password, passwordConfirmation) {
  try {
    const response = await axios.post(`${baseUrl}/api/employees`, {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
    });

    console.log('Employee registered successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering Employee:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function to verify an Employee
async function verifyEmployee(employeeId, verificationCode) {
  try {
    const response = await axios.post(`${baseUrl}/api/employees/verify/${employeeId}/${verificationCode}`, {});

    console.log('Employee verified successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error verifying Employee:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function to log in
async function loginEmployee(email, password) {
  try {
    const response = await axios.post(`${baseUrl}/api/sessions`, { email, password });

    console.log('Employee logged in successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Function to get the current Employee
async function getCurrentEmployee() {
  try {
    const response = await axios.get(`${baseUrl}/api/me`);

    console.log('Current Employee:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting current Employee:', error.response ? error.response.data : error.message);
    throw error;
  }
}
