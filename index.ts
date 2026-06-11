
//-----------------------Vehicle Class------------------------------------------
class Vehicle {
  make: string;
  model: string;
  wheels: number;
  status: "started" | "stopped";

  constructor(make:string, model:string, wheels:number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    this.status = "stopped";
  }
  start(): void {
    this.status = "started";

  }
  stop(): void {
    this.status = "stopped";
  }
}
//----------------------------------------------Class Car -------------------------------------------
class Car extends Vehicle {

  constructor(make:string, model:string) {
    super(make, model, 4);
  }
}
//-------------------------------------Class MotorCycle----------------------------------------
class MotorCycle extends Vehicle {

  constructor(make:string, model:string) {
    super(make, model, 2);
  }
}

//--------------------- printStatus function ------------------------------------------
function printStatus(vehicle: Vehicle):void {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}
//----------------------------------------------------------------------------------------------------------------------------
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());                        //changed toUppercase() to toUpperCase();

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);

//-----------------------------------------Class NCycle-------------------------


class NCycle<T> {
  make: T | T[];
  model: T | T[];
  wheels: number;
  status: "started" | "stopped";

  constructor(make: T | T[], model: T | T[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    this.status = "stopped";
  }
  start(): void {
    this.status = "started";

  }
  stop(): void {
    this.status = "stopped";
  }
  //-------------------------------function print--------------------------------------------------------------
  print(pos: number = 0): void {
    if (!Array.isArray(this.model) && !Array.isArray(this.make)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    }
    else if (Array.isArray(this.make) && (Array.isArray(this.model)) && pos >= 0 && pos < this.make.length && pos < this.model.length) {
      console.log(`This NCycle has a ${this.make[pos]} ${this.model[pos]} at ${pos}.`);

    }
    else {
      console.log("This NCycle was not created properly.");
    }

  }

//-------------------------function ---printAll-------------------------------------------------

  printAll(): void {
    if (!Array.isArray(this.model) && !Array.isArray(this.make)) {
      console.log(`This is a ${this.make} ${this.model} NCycle`);
    }
    else if (Array.isArray(this.make) && Array.isArray(this.model))
      {
       
        const n=this.make.length<this.model.length?this.make.length:this.model.length;
        for (let i= 0;i < n; i++) 
          {
            console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);

          }
        }
    else {
             console.log("This NCycle was not created properly.");
         }


    }


  }


//---------------------------------Test Cases----------------------------------------

const testCycle1 = new NCycle <number>(1, 2, 3);

testCycle1.print();

testCycle1.printAll();

const testCycle2 = new NCycle<string>("This", "That", 4);

testCycle2.print();

testCycle2.printAll();



//const testCycle3 = new NCycle<string>("Make", 10, 4);  //number is assigned to  'Model' instead of string
const testCycle3 = new NCycle<string>("Make","Model", 4);



testCycle3.print(4);

testCycle3.printAll();



const makes4 = ["Volkswagon", "Tesla", "Audi"];

const models4 = ["Passat", "Model X", "A4"];

const testCycle4 = new NCycle<string[]>(makes4, models4, 4);

testCycle4.print(2);

testCycle4.printAll();



const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const models5 = [1, 1, 2, 3, 5];

const testCycle5 = new NCycle<number[]>(makes5, models5, 0);

testCycle5.print(7);

testCycle5.printAll();



function add(x: number, y: number): number {

  return x + y;

}



if(!Array.isArray(testCycle1.make)&& Array.isArray(testCycle5.model))
// Error expected here
{
  add(testCycle1.make, testCycle5.model[1]);
 
}

add(testCycle2.make, testCycle4.model[1]);