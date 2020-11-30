const express = require('express');
const connectDB = require('./config/db');

// connect Database
connectDB();

const app = express();

const port = 5000;

// I believe this is to be replaced with routes
app.get('/', (req, res) => {
    res.send(`Server is running on port ${port}`)
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

