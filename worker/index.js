const zeromq = require('zeromq');
const LOCATION = 'tcp://localhost:10001';

let socket = zeromq.socket('pull');
socket.connect(LOCATION);

console.log('Connected to ' + LOCATION);

let receivedMessages = 0;
let minTime = Number.MAX_VALUE;
let maxTime = 0;
let allTimes = 0;

socket.on('message', msg => {
  msg = JSON.parse(msg);

  trackTiming(msg);

  console.log('Compute work: ' + msg.someString);
});

function trackTiming(msg) {
  const receivedTime = +Date.now();
  const elapsedTime = receivedTime - msg.time;

  receivedMessages++;
  allTimes += elapsedTime;

  if (elapsedTime < minTime) {
    minTime = elapsedTime;
  }

  if (elapsedTime > maxTime) {
    maxTime = elapsedTime;
  }

  const currentAverage = allTimes / receivedMessages;

  console.log(`[TIMING] ${elapsedTime}ms   average:${currentAverage}ms   max:${maxTime}ms   min:${minTime}ms   msgCount:${receivedMessages}`);
}
