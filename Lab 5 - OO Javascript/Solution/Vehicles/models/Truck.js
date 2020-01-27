let Vehicle = require('./Vehicle');

class Truck extends Vehicle{
    constructor(idVehicle,manufacturer,loadCapacity,noOfContainers){
        super(idVehicle,manufacturer);
        this.loadCapacity=loadCapacity;
        this.noOfContainers=noOfContainers;
    }


}


module.exports=Truck;

