// import {Car, CarInstance} from './interfaceExample';
// import {ClassCar} from './classExample';
// import {createSquare} from './optionItsExam';

// function swap([first, second]:[number, number]):[number,number] {
//   console.log(`first:${first}`);
//   [first, second] = [second, first];
//   return [first, second];
// }
// function greeter(person: string) {
//   return "Hello, " + person;
// }
// const carIns = new Car('toyota','Prius','Honda');
// const Prius = new ClassCar('Prius', 4, true);
// console.group(`class example:`);
// console.log(carIns);
// console.groupEnd();
// console.group(`class with interface example`);
// console.log(Prius);
// console.groupEnd();
// console.group(`class with interface instance example`);
// console.log(CarInstance);
// console.groupEnd();
// console.group(`function type specified`);
// console.log(greeter('User'));
// console.groupEnd();
// console.group(`interface with optional properties`);
// console.log(createSquare({color:"black"}));
// console.groupEnd();
// console.group(`swap [1,2]`);
// console.log(swap([1,2]));
// console.groupEnd();

// interface IEcho <T>{
//   (arg: T): T;
// }

// function echo<T>(arg: T): T {
//   console.log(typeof arg);
//   return arg;
// }

// const myEcho: IEcho<number> = echo;
// console.log(echo(1));
// const a:number = 1;
// myEcho(1);
import {addTask} from './testqueue-management';
import moment from 'moment';
const doPromiseEcho = (value)=> {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log(`value: ${value}`);
      resolve(value);
    }, 1000);
  });
};
const callbackHdr = (value) => (value) => doPromiseEcho(value);

let arr = [1,5,89];
arr.forEach(async (item)=>{
  addTask({handler: callbackHdr(item), sessionID: item});
});