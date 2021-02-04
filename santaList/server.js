const express = require('express');
const dotenv = require('dotenv');
const morgan= require('morgan');
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'});

connectDB();

const letters = require('./routes/letters');

const app = express();

app.use(express.json());

app.use('/api/v1/letters', letters);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running at ${process.env.NODE_ENV} mode on port ${PORT}`));