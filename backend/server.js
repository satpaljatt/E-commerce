import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // .js lagana mat bhulna!

dotenv.config();

connectDB(); // Database connect function call

const app = express();

app.get('/', (req, res) => {
    res.send('API is running... and its working good on january 7');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));