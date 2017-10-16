const onoff = require('onoff');

const gpio = onoff.Gpio;
const motor = new gpio(23,'out');

const interval = setInterval(function(){
  let value = (motor.readSync() + 1) % 2;
  motor.write(value,() => console.log(`Changed State: ${value}`));
},2000);

process.on('SIGINT',() => {
  clearInterval(interval);
  motor.writeSync(0);
  motor.unexport();
  console.log('exiting...');
  process.exit();
});
