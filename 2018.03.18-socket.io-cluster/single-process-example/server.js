const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const sio = require('socket.io');
const io = sio(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  socket.emit('process_info', { pid: process.pid });
});

server.listen(3000);