//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        this.started = false;
    }

    loadPassenger(num){
        if (num + this.passenger <= this.maxPassengers){
            this.passenger += num;
            return this.passenger;
        }else{
            console.log('Not enough passenger room for this vehicle.');
        }
    }

    checkService(){
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

    start(){
        if (this.fuel > 0) {            
            console.log("The engine has started.");
            return this.started = true
        } else {
            console.log("No fuel to start the engine.");
            return this.started = false;
        }
    }
}
