const express = require('express');
const morgan = require('morgan');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection',()=>{
  console.log('un usuario se ha conectado')
})

app.use(cors())
app.use(morgan('dev'));

server.listen(4000);
console.log('server started on port 3000');
