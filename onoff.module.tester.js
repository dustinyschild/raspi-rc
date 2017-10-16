const EventEmitter = require('events');
const onoff = require('onoff');

const gpio = onoff.Gpio;
const motor = new gpio(23,'out');
const myEmitter = new EventEmitter();

myEmitter.once('keypress',function(){
  let value = (motor.readSync() + 1) % 2;
  motor.write(value,() => console.log(`Changed State: ${value}`));
},2000);

process.on('SIGINT',() => {
  motor.writeSync(0);
  motor.unexport();
  console.log('exiting...');
  process.exit();
});
