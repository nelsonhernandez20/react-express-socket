const express = require('express');
const morgan = require('morgan');
const { Server as socketServer } = require('socket.io');
const app = express();
const http = require('http');

const server = http.createServer(app);
new Server(server);

app.use(morgan('dev'));


app.listen(3000);
console.log('server started on port 3000');
