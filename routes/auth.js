const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const auth = require('../middleware/auth');

const User = require('../models/User');

// @route   POST /api/auth
// @desc    Login a user
// @access  Public
router.post('/', [
    body('email', 'Email is required').isEmail().not().isEmpty(),
    body('password', 'Password is required').isLength({ min: 6 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({email});

        // If user doesn't exist
        if (!user) {
            return res.status(400).json({ message: "User does not exist"})
        }

        // 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password"})
        }

        // create payload for JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        // create token and send with results at json
        jwt.sign(
            payload,
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
        console.log('Login Failure from the server')
    }
});

//  @route      GET /api/auth
//  @desc       get logged in user by token / loadUser
//  @access     private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;