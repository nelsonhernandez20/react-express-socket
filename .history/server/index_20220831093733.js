const express = require('express');
const morgan = require('morgan');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(morgan('dev'));


app.listen(3000);
console.log('server started on port 3000');
