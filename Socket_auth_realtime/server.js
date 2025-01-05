require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const authenticate = require('./middleware/authenticate');

const app = express();
const server = http.createServer(app);

//configurar cors
const io = socketIo(server, {
    cors: {
        origin: ['http://localhost:4200', 'http://localhost'],
        credentials: true,
        allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['my-curtom-header'],
    }
});

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
io.use(authenticate);

io.on('connection', (socket) => {
    console.log('User connection established',socket.id);
    console.log(socket.user);
    
    socket.on('message', (msg) => {
        console.log('Mensaje recibido:', msg);
        const messageData = {
            text: msg,
            sender: socket.user.username
        };
        io.emit('message', messageData);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected',socket.name);
    })
})

const PORT = process.env.PORT || 3400;
server.listen(PORT, () => console.log(`User listening on port ${PORT}`));