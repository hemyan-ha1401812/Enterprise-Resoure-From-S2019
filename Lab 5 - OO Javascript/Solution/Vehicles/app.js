let Car = require('./models/Car');
let Vehicle = require('./models/Vehicle');
let Truck = require('./models/Truck');
let vehicleRepo  = require('./repos/VehicleRepo');


vehicleRepo.addVehicle(new Car(12345,'lamborghini',2,2));


let c1=new Car(12345,'lamborghini',2,2);
let c2=new Car(12346,'ferari',4,4);
let c3=new Car(12347,'mazarati',8,6);
let c4=new Car(12348,'toyota',10,4);
let c5=new Car(123468,'toyota',11,5);
let c6=new Car(12338,'toyota',112,22);



let t1=new Truck(12349,"marcedez",2,1000);
let t2=new Truck(12343,"bmw",4,2000);
let t3=new Truck(12342,"zuzuki",8,3000);
let t4=new Truck(1234931,"cat",10,5000);
let t5=new Truck(1223338,'toyota',132,52);
let t6=new Truck(12344238,'toyota',1332,12);





let vehicles=[c1,c2,t1,t2,c3,c4,t3,t4,c5,c6,t5,t6];
vehicles.forEach(vehicles=>console.log(vehicles.manufacturer));
let toyotaVehicles = vehicles.filter(vehicle=>vehicle.manufacturer=="toyota");
console.log(toyotaVehicles);

let toyotaCars = vehicles.filter(vehicle=>vehicle.manufacturer=="toyota"&& vehicle instanceof Car);
console.log(toyotaCars);



let toyotaTruck= (acc,curr)=>{
    if (curr instanceof Truck && curr.manufacturer=="toyota");
    acc.push(curr);
    return acc;

}


console.log(toyotaTruck());



let person ={
    name :"Hemyan",
    age: 22,
    gender:"Female"

}

let propertyName = "Gender";


let truckx = {
    idVehicle: 3233442,
    manufacturer: "toyota",
    loadCapacity: 43,
    noOfContainers: 23,
    name,// the variable and the value has the same name
    getVehicle() {
        return this.idVehicle;

    },
    [propertyName] : "male"

}



















