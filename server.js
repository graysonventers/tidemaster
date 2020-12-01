const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// connect Database
connectDB();

const app = express();

app.use(bodyParser.json());

const port = process.env.port || 5000;

//
app.get('/', (req, res) => {
    res.send(`Server is running on port ${port}`)
});

// Define Routes
// Register and Login User Routes
app.use('/api/users', require('./routes/users'));


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

