const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// connect Database
connectDB();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
    res.header("Access-Control-Allow-Methods", "*")
    next();
});
  
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Define Routes
// Register and Login User Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

