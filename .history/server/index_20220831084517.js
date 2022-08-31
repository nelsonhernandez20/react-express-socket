const express = require('express');
const morgan = require('morgan');
const {Server} = require('socket.io');
const app = express();

app.use(morgan('dev'));

app.listen(3000);
console.log('server started on port 3000');
