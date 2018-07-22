import {Car, CarInstance} from './interfaceExample';
import {ClassCar} from './classExample';
import {createSquare} from './optionItsExam';
function swap([first, second]:[number, number]):[number,number] {
  [first, second] = [second, first];
  return [first, second];
}
function greeter(person: string) {
  return "Hello, " + person;
}
const carIns = new Car('toyota','Prius','Honda');
const Prius = new ClassCar('Prius', 4, true);
console.group(`class example:`);
console.log(carIns);
console.groupEnd();
console.group(`class with interface example`);
console.log(Prius);
console.groupEnd();
console.group(`class with interface instance example`);
console.log(CarInstance);
console.groupEnd();
console.group(`function type specified`);
console.log(greeter('User'));
console.groupEnd();
console.group(`interface with optional properties`);
console.log(createSquare({color:"black"}));
console.groupEnd();
console.group(`swap [1,2]`);
console.log(swap([1,2]));
console.groupEnd();