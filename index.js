const express = require('express');
const mongoose = require('mongoose')
const staffRoutes = require('./api/routes/routes.staff');
const app = express();
const dotenv = require('dotenv');
const { preAPIMiddleware, postAPIMiddleware, errorHandlingMiddleware } = require('./api/middleware/middleware.logging');

dotenv.config();

const port = process.env.API_PORT;
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', (error) => console.error(`MongoDB connection error: ${error}`));
db.once('open', () => console.log('Connected to MongoDB'));


app.use(express.json());
app.use('/api/staff', staffRoutes);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});