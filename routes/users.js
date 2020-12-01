const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { JsonWebTokenError } = require('jsonwebtoken');

// @route   POST /api/users
// @desc    Register a user
// @access  Public
router.post('/', async (req, res) => {

    const { name, email, password } = req.body;

    try {

        // check if user already exists in database by email
        let user = await User.findOne({email});

        if (user) {
            return res.status(400).json({ message: "User already exists" })
        };

        // Hash password
        const hash = await bcrypt.hash(password, 10);

        // Create instance of User model (aka register user)
        user = new User({
            name,
            email,
            password: hash
        });
        
        // Save new user to db
        await user.save();

        // create payload for JWT
        const payload = user._id;

        // create token and send with results at json
        jwt.sign(
            {payload},
            config.get('jwtSecret'),
            {expiresIn: '1 day'},
            function(err, token) {
                if (err) throw err;
                res.json({ token })
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});


// @route   GET user
// @desc    Login a user
// @access  Public
router.get('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exisits
        const user = await User.findOne({email});

        // If user doesn't exist
        if (!user) {
            res.status(400).json({ message: "User does not exist"})
        }

        // 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: "Incorrect password"})
        }

        // create payload for JWT
        const payload = user._id;

        // create token and send with results at json
        jwt.sign(
            {payload},
            config.get('jwtSecret'),
            {expiresIn: '1 day'},
            function(err, token) {
                if (err) throw err;
                res.json({ token })
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

module.exports = router;