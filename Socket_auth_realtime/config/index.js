require('dotenv').config();

const config = {
    port: process.env.PORT || 3400,
    jwtSecret: process.env.SECRET_KEY || 'default_secret',
};

module.exports = config;