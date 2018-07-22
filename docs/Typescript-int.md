#TypeScript Init instruction

ref:<https://www.typescriptlang.org/docs/home.html>

## a superset of javascript

	1 javascript is part of typescript
	
	2 javascript with type specified with every variable, function signature
	
	3 with typescript, code could get rid of misusing of type.
	
## why typescript

ref:<https://basarat.gitbooks.io/typescript/docs/why-typescript.html>

	1 for type check. especially selfdefined class
	
	2 Provide planned features from future JavaScript editions to current JavaScript engines 
	
## how to learn

	1 online Compiler

<http://www.typescriptlang.org/play/index.html>

	2 official doc

<https://www.typescriptlang.org/docs/home.html>

## install tsc

	npm install -g typescript

## Live compile + run

### 1 use ts-node for live-compile and run
	
	npm i ts-node -D
### 2 use nodemon which will invoke ts-node whenever a file is changed
	
	npm i nodemon -D
	
### 3 setup the script tag to enable live compiling

	"scripts": {
		"start": "npm run build:live"
		"build:live": "nodemon --exec ./node_modules/.bin/ts-node ./src/index.ts"
	}
	
## DataTypes
### Basic Type
<b>#1)Boolean</b>
	
	let isDone: boolean = false;

<b>#2)Number</b>

	let decimal: number = 6;
	let hex: number = 0xf00d;
	let binary: number = 0b1010;
	let octal: number = 0o744;

<b>#3)String</b>

1 Normal

	let color: string = "blue";
	color = 'red';	

2 Template strings
	
	let fullName: string = `Bob Bobbington`;
	let age: number = 37;
	let sentence: string = `Hello, my name is ${ fullName }.

	I'll be ${ age + 1 } years old next month.`;

<b>#4)Array</b>

1 element array

	let list: number[] = [1, 2, 3];

2 generic array type, <b style="color:red;">Array\<elemType\></b>

	let list: number[] = [1, 2, 3];
	
<b>#5)Tuple</b>

	// Declare a tuple type
	let x: [string, number];
	// Initialize it
	x = ["hello", 10]; // OK
	// Initialize it incorrectly
	x = [10, "hello"]; // Error
	
When accessing an element with a known index, the correct type is retrieved:
	
	console.log(x[0].substr(1)); // OK
	console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
	
When accessing an element outside the set of known indices, a union type is used instead:

	x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
	console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
	x[6] = true; // Error, 'boolean' isn't 'string | number'
	
<b>#6)Enum</b>

1 default initial value = 0

	enum Color {Red, Green, Blue}
	let c: Color = Color.Green;

2 specified initial value = 1

	enum Color {Red = 1, Green, Blue}
	let c: Color = Color.Green;

3 specified each item value

	enum Color {Red = 1, Green = 2, Blue = 4}
	let c: Color = Color.Green;

4 item value judge example

	enum Color {Red = 1, Green, Blue}
	let colorName: string = Color[2];
	
	alert(colorName); // Displays 'Green' as its value is 2 above

<b>#7)Any</b>

1 if a variable assign to any type, then it is type-free:

	let notSure: any = 4;
	notSure = "maybe a string instead";
	notSure = false; // okay, definitely a boolean
	
2 difference between type-free and type-specified

	let notSure: any = 4;
	notSure.ifItExists(); // okay, ifItExists might exist at runtime
	notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
	
	let prettySure: Object = 4;
	prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
	
3 type-free array

	let list: any[] = [1, true, "free"];
	
	list[1] = 100;

<b>#8)Void</b>

1 a return type could be used in function signature, could be ether undefined or null:

	function warnUser(): void {
	    alert("This is my warning message");
	}
	
2 example for variable

	let unusable: void = undefined;

<b>#9)Null and Undefined</b>

	// Not much else we can assign to these variables!
	let u: undefined = undefined;
	let n: null = null;
	
<b>Object</b>

object is a type that represents the non-primitive type, i.e. any thing that is not number, string, boolean, symbol, null, or undefined.

	declare function create(o: object | null): void;

	create({ prop: 0 }); // OK
	create(null); // OK
	
	create(42); // Error
	create("string"); // Error
	create(false); // Error
	create(undefined); // Error
### Type assertions

	A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. 

1 angle-bracket syntax

	let someValue: any = "this is a string";
	
	let strLength: number = (<string>someValue).length;

2 as syntax

	let someValue: any = "this is a string";

	let strLength: number = (someValue as string).length;

### interface

	In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project

Example 1:

	function printLabel(labelledObj: { label: string }) {
	    console.log(labelledObj.label);
	}
	
	let myObj = {size: 10, label: "Size 10 Object"};
	printLabel(myObj);

Example2 :

	interface LabelledValue {
    label: string;
	}
	
	function printLabel(labelledObj: LabelledValue) {
	    console.log(labelledObj.label);
	}

	let myObj = {size: 10, label: "Size 10 Object"};
	printLabel(myObj);

<b>Optional Properties</b>

	Not all properties of an interface may be required.

Example:

	interface SquareConfig {
	    color?: string;
	    width?: number;
	}
	
	function createSquare(config: SquareConfig): {color: string; area: number} {
	    let newSquare = {color: "white", area: 100};
	    if (config.color) {
	        newSquare.color = config.color;
	    }
	    if (config.width) {
	        newSquare.area = config.width * config.width;
	    }
	    return newSquare;
	}
	
	let mySquare = createSquare({color: "black"});


<b>Readonly Property</b>

1 Readonly properties:

	interface Point {
	    readonly x: number;
	    readonly y: number;
	}
	
	let p1: Point = { x: 10, y: 20 };
	p1.x = 5; // error!
	
2 Readonly array:

	let a: number[] = [1, 2, 3, 4];
	let ro: ReadonlyArray<number> = a;
	ro[0] = 12; // error!
	ro.push(5); // error!
	ro.length = 100; // error!
	a = ro; // error!
	
3 addable property:

	interface SquareConfig {
    	color?: string;
    	width?: number;
    	[propName: string]: any;
	}

	let squareOptions = { colour: "red", width: 100 };
	let mySquare = createSquare(squareOptions);


### class

1 ES6 Class:
	
	class Greeter {
	    greeting: string;
	    constructor(message: string) {
	        this.greeting = message;
	    }
	    greet() {
	        return "Hello, " + this.greeting;
	    }
	}

	let greeter = new Greeter("world");
		
2 Inheritance

1 simple override 

	class Animal {
	    move(distanceInMeters: number = 0) {
	        console.log(`Animal moved ${distanceInMeters}m.`);
	    }
	}
	
	class Dog extends Animal {
	    bark() {
	        console.log('Woof! Woof!');
	    }
	}
	
	const dog = new Dog();
	dog.bark();
	dog.move(10);
	dog.bark();

2 overide example

	class Animal {
	    name: string;
	    constructor(theName: string) { this.name = theName; }
	    move(distanceInMeters: number = 0) {
	        console.log(`${this.name} moved ${distanceInMeters}m.`);
	    }
	}
	
	class Snake extends Animal {
	    constructor(name: string) { super(name); }
	    move(distanceInMeters = 5) {
	        console.log("Slithering...");
	        super.move(distanceInMeters);
	    }
	}
	
	class Horse extends Animal {
	    constructor(name: string) { super(name); }
	    move(distanceInMeters = 45) {
	        console.log("Galloping...");
	        super.move(distanceInMeters);
	    }
	}
	
	let sam = new Snake("Sammy the Python");
	let tom: Animal = new Horse("Tommy the Palomino");

	sam.move();
	tom.move(34);
	
<b>Public, private, and protected modifiers</b>

1 Public by default

	class Animal {
	    public name: string;
	    public constructor(theName: string) { this.name = theName; }
	    public move(distanceInMeters: number) {
	        console.log(`${this.name} moved ${distanceInMeters}m.`);
	    }
	}

2 private example

When a member is marked private, it cannot be accessed from outside of its containing class.

	class Animal {
	    private name: string;
	    constructor(theName: string) { this.name = theName; }
	}
	
	new Animal("Cat").name; // Error: 'name' is private;
	

3 protected example

The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes.

	class Person {
	    protected name: string;
	    constructor(name: string) { this.name = name; }
	}
	
	class Employee extends Person {
	    private department: string;
	
	    constructor(name: string, department: string) {
	        super(name);
	        this.department = department;
	    }
	
	    public getElevatorPitch() {
	        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	    }
	}
	
	let howard = new Employee("Howard", "Sales");
	console.log(howard.getElevatorPitch());
	console.log(howard.name); // error

<b>Modifier Accessible table</b>

|accessible|public|protect|private|
|:----------|:-:|:-:|:-:|
|class|yes|yes|yes|
|class children|yes|yes|no|
|class instances|yes|no|no|

<b>Accessor</b>


	let passcode = "secret passcode";
	
	class Employee {
	    private _fullName: string;
	
	    get fullName(): string {
	        return this._fullName;
	    }
	
	    set fullName(newName: string) {
	        if (passcode && passcode == "secret passcode") {
	            this._fullName = newName;
	        }
	        else {
	            console.log("Error: Unauthorized update of employee!");
	        }
	    }
	}
	
	let employee = new Employee();
	employee.fullName = "Bob Smith";
	if (employee.fullName) {
	    console.log(employee.fullName);
	}
	
<b>Abstract Classes</b>

	abstract class Animal {
	    abstract makeSound(): void;
	    move(): void {
	        console.log("roaming the earth...");
	    }
	}
## export and import syntax(ES6 module)
ref: <http://oomusou.io/typescript/module/>
### Export
1 export before <b>interface, const, class, function</b>

	export interface StringValidator {
	    isAcceptable(s: string): boolean;
	}
	
	export const numberRegexp = /^[0-9]+$/;

	export class ZipCodeValidator implements StringValidator {
	    isAcceptable(s: string) {
	        return s.length === 5 && numberRegexp.test(s);
	    }
	}

2 export with alias

	class ZipCodeValidator implements StringValidator {
	    isAcceptable(s: string) {
	        return s.length === 5 && numberRegexp.test(s);
	    }
	}
	export { ZipCodeValidator };
	export { ZipCodeValidator as mainValidator };
	
3 export from
	
	export class ParseIntBasedZipCodeValidator {
	    isAcceptable(s: string) {
	        return s.length === 5 && parseInt(s).toString() === s;
	    }
	}
	
	// Export original validator but rename it
	export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";
	export * from "./StringValidator"; // exports interface 'StringValidator'
	export * from "./LettersOnlyValidator"; // exports class 'LettersOnlyValidator'
	export * from "./ZipCodeValidator";  // exports class 'ZipCodeValidator
	
4 default export

	export default class ZipCodeValidator {
	    static numberRegexp = /^[0-9]+$/;
	    isAcceptable(s: string) {
	        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
	    }
	}

### Import

1 Single import

	import { ZipCodeValidator } from "./ZipCodeValidator";
	let myValidator = new ZipCodeValidator();	
2 import with alias

	import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
	let myValidator = new ZCV();

3 import with * and alias

	import * as validator from "./ZipCodeValidator";
	let myValidator = new validator.ZipCodeValidator();


## generic

<https://www.typescriptlang.org/docs/handbook/generics.html>

## next use typescript in react

<https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter>