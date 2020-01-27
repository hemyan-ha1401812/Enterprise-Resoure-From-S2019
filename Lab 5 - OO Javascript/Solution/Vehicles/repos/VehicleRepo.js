class VehicleRepo{

    constructor(){
        this.vehicles=[];

    }
    addVehicle(){
        this.vehicles.push(vehicle);
    }

    deletVehicle(idVehicle){
        let index = this.vehicles.find(vehicle=> vehicle==idVehicle)
        this.vehicles.slice(index,1);
    }

    displayAllVehicles(){
        this.vehicles.forEach(vehicle=>console.log(vehicle));
    }

}







model.exports= new VehicleRepo()






