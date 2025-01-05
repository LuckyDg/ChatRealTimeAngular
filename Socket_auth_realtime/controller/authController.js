const tokenUtils = require('../utils/token');

const users = {
    'user@example.com': {  username:'pedro',password: 'password123', role: 'user' },
    'user2@example.com': {  username:'juan',password: 'password123', role: 'user' },
    'admin@example.com': {username:'camila', password: 'admin123', role: 'admin' },
    'admin2@example.com': {username:'pamela', password: 'admin123', role: 'admin' },
    'admin3@example.com': {username:'estevan', password: 'admin123', role: 'admin' }
};

const login = (req, res) => {
    const { email, password } = req.body;
    const user = users[email];

    if (user && user.password === password) {
        const token = tokenUtils.generateToken({email, username: user.username, role: user.role });
        res.json({ token });
    } else {
        res.status(401).send('Credenciales no válidas');
    }
};

module.exports = {
    login
}