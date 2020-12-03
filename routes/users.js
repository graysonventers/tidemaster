const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const auth = require('../middleware/auth');
const User = require('../models/User');

// ROUTES WITHIN HERE:
    // Register User
    // Add favoriteSpot to user model
    // Remove favoriteSpot from user model

// @route   POST /api/users
// @desc    Register a user
// @access  Public
router.post('/', [
    body('name', 'Please include a name').not().isEmpty(),
    body('email', 'Email is required').isEmail().not().isEmpty(),
    body('password', 'Password is required').isLength({ min: 6 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

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

// @route   PUT /api/users
// @desc    Add favorites to User model
// @access  Private

// Notes: must send data to server as "favoriteSpots": "spot"

router.put('/', auth, async (req, res) => {

    try {
        let user = await User.findById(req.user.id);

        if (user.favoriteSpots.includes(req.body.favoriteSpots)) return res.send('Already saved as a favorite spot');

        user.favoriteSpots.push(req.body.favoriteSpots);
        await user.save();
        
        res.json(user);

    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

// @route   DELETE /api/users
// @desc    Delete favoriteSpot from User model
// @access  Private

// Notes: must send data to server as "favoriteSpots": "spot"

router.delete('/', auth, async (req, res) => {

    try {
        let user = await User.findById(req.user.id);

        user.favoriteSpots = user.favoriteSpots.filter(favoriteSpot => favoriteSpot !== req.body.favoriteSpots);

        await user.save();
        
        res.send('Favorite Spot Deleted');

    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

module.exports = router;