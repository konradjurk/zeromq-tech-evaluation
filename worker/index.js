const zeromq = require('zeromq');
const LOCATION = 'tcp://localhost:10001';

let socket = zeromq.socket('pull');
socket.connect(LOCATION);

console.log('Connected to ' + LOCATION);

socket.on('message', msg => {
  console.log('Compute work: ' + msg);
});
