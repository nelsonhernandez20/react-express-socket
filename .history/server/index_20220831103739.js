const express = require('express');
const morgan = require('morgan');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
	},
});

io.on('connection', (socket) => {
	console.log(socket.id);
	socket.on('message', (message) => {
		console.log(message);
		socket.broadcast.emit('message', message);
	});
});

app.use(cors());
app.use(morgan('dev'));

server.listen(4000);
console.log('server started on port 3000');
