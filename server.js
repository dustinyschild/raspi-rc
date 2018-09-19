const io = require('socket.io')
const server = io();

//set up listeners
server.on('connect', function({ id }){
  console.log("Client connected\n", `Successfully connected ${id}`);
  server.emit('connected', { id });
});

//set up action emitter

server.listen(3000);