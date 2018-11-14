import {addTask} from './testqueue-management';
// import {Promise} from 'es6-promise';
import {testYield} from './yieldfunction';
// import moment from 'moment';
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

const doPromiseEcho = (value, timeout)=> {
  // console.log(`value: ${value}`)
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      // console.log(`value: ${value}`);
      resolve(value);
    }, timeout);
  });
};
const callbackHdr = (value, timeout) => ()=> doPromiseEcho(value, timeout);

let arr = [{val:1,to: 10000},{val:5, to:1000},{val:89, to:2000}];
// arr.forEach((item)=>{
// console.log(item);
  
let rsps1 = addTask({handler: callbackHdr(arr[0].val, arr[0].to), sessionID: arr[0].val});
let rsps2 = addTask({handler: callbackHdr(arr[1].val, arr[1].to), sessionID: arr[1].val});
let rsps3 = addTask({handler: callbackHdr(arr[2].val, arr[2].to), sessionID: arr[2].val});
const resultFN = async() => {
  let rsls = await Promise.all([rsps1, rsps2, rsps3]);
  console.log(rsls);
};
resultFN();
// });
// let result = testYield(()=> console.log(`test`));
// console.log(1);
// setTimeout(()=> {
//   result.next();
// }, 2000);
// console.log(10);
// callbackHdr(-1, 0)();