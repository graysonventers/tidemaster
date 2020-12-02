const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {

    // Get token from request header
    const token = req.header('x-auth-token');

    // Check if token exists
    if(!token) return res.status(401).json({ message: "No token" });

    try {
        jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
            if (error) {
                return res.status(401).json({ message: 'Token is not valid'});
            } else {
                req.user = decoded.user;
                next();
            }
        });
    } catch (err) {
        res.status(500).json({ message: "Invalid Token" });
    }
};