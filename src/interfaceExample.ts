interface ICar{
  model: String,
  make: String,
  display(): void
}
interface CD {
  cdPlay: String
}
class Car implements ICar, CD {
  cdPlay: String;
  model: String;
  make: String;
  constructor(cdPlay:String, model:String, make:String ) {
    this.cdPlay = cdPlay;
    this.model = model;
    this.make = make;
  }
  display() {
    console.log(`test`);
  }
};
const Car1: ICar = {
  model: 'Prius',
  make: 'Toyota',
  display:() => {console.log("hi");}
}

export {Car};
export {Car1 as CarInstance};