const sum = (a: number, b: number) => a + b;
// sum('hfhgf','dfhdf') // throws error
console.log(sum(3, 5)) // works
let num: number = 44;
let data: string = 'This is string';

// assignments
data = 44 // throws error
num = 'string' //throws error

data = 'string' //works
num = 22 // works
let a = 44;

a = 'Im a string but compiler wont allow me to assign' // throws error
a = 10 // works

let b = 'Im happily string!'
b = 12 // Nah, it wont work
b = 'Im another string' // Yes it works!

let records: number[] = []; // only numbers in array
let boxes = [] // any[]

records.push(1) // works
records.push(12.5) // works
records.push('Haha!') // Ohh.! I can't allow you as you are laughing!
boxes.push(44) // works
boxes.push('Haha!') // works
boxes.push(true)
let nullValue: null = null // you can only assign null to it
let undefinedValue: undefined = undefined //

nullValue = 22 // Yay!. What are you doing? do you think 22 is null? 
nullValue = undefined  // No. Not works
undefinedValue = null // No. listen?
enum Fruit {
  Apple,
  Orange,
  Melon,
}
let fruit: Fruit = Fruit.Apple;
fruit = Fruit.Orange //works
fruit = 'grapes' // Wont work. You know why right? 
fruit = Fruit.Grapes
let someObj: object = {}; // not recommended
someObj = {
  someNo: 123,
  someString: 'hi there!',
  sayHi: () => { console.log('Hi') }
};

let anotherObject: { someNo: number; someString: string; sayHi: () => void }  // better to define object property types aswell

// this works
anotherObject = {
  someNo: 345,
  someString: "hi",
  sayHi: () => {
    console.log("hi");
  }
}

// but not this
anotherObject = {
  someNo: 'hi',
  someString: 24,
  sayHi: () => {
    return 'Hey Im returning. but compiler allows as void.!'
  }
}
let someTypedFunction: Function = () => {
  console.log('I dont care about no.of args passed and return type aswell');
}
someTypedFunction()
const someTypedFunction2 = (a: number, b: number): number => {
  const sum: number = a + b;
  return 'Hey are you there?';
}
someTypedFunction2(4, 5)

const someTypedFunction3 = (a: number, b: number): number => {
  return a + b
}

someTypedFunction3(5, 8) // works
someTypedFunction3(5, '8') // wont work
someTypedFunction3(5, 8, 2) // wont work. args are more than defined

//  classes
class Person {
  // property type declaration
  name: string;
  age: number = 0;
  constructor(name: string, age: number) {
    // valid
    this.name = name;
    this.age = age;
  }
}
let person = new Person('Kiran', 22) // works
person = new Person(22, 'Kiran') // wont work

// compose types unions, interfaces
type justNumber = number;
type Persons = {
  name: string,
  age: number,
  favColors: string[]
}
const someNumber: justNumber = 12;
let somePerson: Persons;

// works
somePerson = {
  name: 'Kiran',
  age: 22,
  favColors: ['blue', 'green', 'yellow']
}

// wont work
somePerson = {
  name: 22,
  age: 'Kiran',
  favColors: 'Yellow'
}

// interfaces:same as 'type' but can be extended

interface DifferentPerson {
  name: string,
  age: number,
}
const personA: DifferentPerson = {
  name: 'personA',
  age: 23
};
// extending interface to new Interface
interface Teacher extends DifferentPerson {
  subject: string,
}
const personB: Teacher = {
  name: 'personB',
  age: 23,
  subject: 'Chemistry'
}

// unions '|' operator

let input: string | number = 44;
input = 55; // works
input = 'this also valid'; // works
input = true; // invalid

// unions on type
type A = {
  a: string,
  b: string,
};
type B = {
  c: string,
  d: number,
};
// either a value of type A or B can be assigned to the below declaration
type AOrB = A | B;

// works
let ab: AOrB = {
  a: 'text1',
  b: 'text2'
}
// works
ab = {
  c: 'text',
  d: 22
}

// wont work
ab = {
  e: 22,
  f: 34
}

// wont work
ab = {
  a: 22,
  b: 32
}

// a should be either string or array of strings
function unionFunction(a: string | string[]) {
  // do something
}

// intersection '&'
type SomeA = {
  a: string;
};
type SomeB = {
  b: string;
};
// Now only a value having all the fields declared in SomeA
// and SomeB combined can be assigned to following declaration
type SomeTypeAAndB = SomeA & SomeB;

// works
let bc: SomeTypeAAndB = {
  a: 'test',
  b: 'test2'
}
// wont work because you need to define all
bc = {
  a: 'test'
}