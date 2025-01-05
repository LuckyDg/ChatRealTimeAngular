const tokenUtils = require('../utils/token');
const SECRET_KEY = process.env.SECRET_KEY;

const authenticate = (socket, next) => {
    try {
        const token = socket.handshake.query.token;

        const decoded = tokenUtils.verifyToken(token,SECRET_KEY);
        socket.user = decoded;
        next();
    } catch (error) {
        next(new Error('Authentication failed: ' + error.message));
    }
};

module.exports = authenticate;
