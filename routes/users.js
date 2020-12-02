const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const auth = require('../middleware/auth');
const User = require('../models/User');

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

router.put('/', auth, async (req, res) => {

    try {
        let user = await User.findById(req.user.id);
        user.favoriteSpots.push(req.body.favoriteSpots);
        user.save();
        
        res.send('Favorite Spot added');

    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

module.exports = router;