'use strict';

const gpio = require('pi-gpio');

//open the pins
gpio.open(16,'output',function(){
  gpio.write(16,1,gpio.close(16));
});
