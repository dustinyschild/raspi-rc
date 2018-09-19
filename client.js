const io = require('socket.io-client');
const socket = io('http://localhost:3000');

//set up action receivers
socket.on('connected', function(res) {
  console.log(`Successfully connected to server as ${res.id}`)
});

socket.on('message', function(message){
  console.log(message);
});