let Vehicle = require('./Vehicle');

class Car extends Vehicle{
    constructor(idVehicle,manufacturer,noOfPassengers,noOfDoors){
super(idVehicle,manufacturer);
this.noOfPassengers;
this.noOfDoors;
    }


}

module.exports=Car;

