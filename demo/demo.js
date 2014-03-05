// Generated by CoffeeScript 1.6.3
var L3GD20, LPS331, compass, curMeasurements, measure, measurements, prSensor, timer;

LPS331 = require('../lib/LPS331');

L3GD20 = require('../lib/L3GD20');

prSensor = new LPS331();

compass = new L3GD20();

prSensor.setResolution(9);

measure = function() {
  console.log("---------------*****---------------");
  console.log("Reading Temperature");
  prSensor.readTemperature();
  console.log("---------------");
  console.log("Reading Pressure");
  prSensor.readPressure();
  console.log("---------------");
  //compass.readAllAxes();
  console.log(" ");
  if (measurements > 0) {
    curMeasurements++;
    if (curMeasurements >= measurements) {
      return clearInterval(timer);
    }
  }
};

measurements = 0;

curMeasurements = 0;

timer = setInterval(measure, 2000);
