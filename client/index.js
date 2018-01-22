const zeromq = require('zeromq');
const LOCATION = 'tcp://127.0.0.1:10001';

let socket = zeromq.socket('push');
socket.bindSync(LOCATION);

console.log('Client bound to ' + LOCATION);

setInterval(() => {
  console.log('Sending work');

  const msg = {
    someString: 'hello',
    time: +Date.now()
  };

  socket.send(JSON.stringify(msg));
}, 1);
