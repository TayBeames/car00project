class Vehicle {
    constructor (make, model, year){
        this.a = make;
        this.b = model;
        this.c = year;
    }

    honk(){
    return 'beep';
    }
    together(){    
        return(`This car is a ${this.c} ${this.a} ${this.b}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4;
    }
  }
class Motorcycle extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
        this.revEngine = "vroom";
    }
}
class Garage {
    constructor(capacity) {          
        this.vehicles = [];          
        this.capacity = capacity;        
    }
    add(newVehicle){
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full."
        } 
        if (!(newVehicle instanceof Vehicle)) { //?
            return "Only vehicles are allowed in here!";
        }
        this.vehicles.push(newVehicle);
        return "vehicle added!";
    }
}

