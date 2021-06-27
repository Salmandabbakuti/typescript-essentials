# typescript-essentials
typescript essentials

##### 1. The problem:

```javascript
const sum = (a, b) => a + b;
console.log(sum('cat','dog'))
// expected output: throw error as they are not numbers
// actual result: 'catdog'
```
##### 2. Typescript magic:

```typescript
const sum = (a: number, b: number) => a + b;
sum('cat','dog') // throws error
sum(3,5) // works
```
##### 3. Basics: 

```typescript
// declarations explicit type definitions by you
let num: number = 44;
let data: string = 'hello, I can only be a string';

// assignments
data = 44 // throws error
num = 'string' //throws error

data = 'string' //works
num = 22 // works


// declarations implicit type definitions determined by compiler
let a = 44;

a = 'Im a string but compiler wont allow me to assign' // throws error
a = 10 // works

let b = 'Im happily string!'
b = 12 // Nah!, it wont work
b = 'Im another string' // Yes it works!

```
##### 4. Few More Types:

```typescript

//  1. Boolean
let isActive: boolean = true;  // explicitly defined type
let alwaysBoolean = true // implicitly defined by compiler

isActive = false //works
alwaysBoolean = 44 //Neh! throws error

// 2. any
let anyType: any = true;
anyType = 44;
anyType = 'Oye!';

// 3. unknown
let unknownVariable: unknown = 22; // can be like any but you cannot assign to other types instead any

// 4. null and undefined
let nullValue: null = null // you can only assign null to it
let undefinedValue: undefined = undefined //

nullValue = 22 // Yay!. What are you doing? do you think 22 is null? 
nullValue = undefined  // No. Not works
undefinedValue = null // No. listen?

// 5. void: it is return type for function which says function returns nothing but finishes execution

function greet(name: string): void {
  console.log(`hello ${name}`);
// even this function is returning nothing explicitly, it is returning undefined implicityly. We already know undefined is assignable to void. So, this is valid
};

// 6. never
//functions below never returns
function throwSomeError():never {
throw new Error('I am only throwing error');
}

// 7. enum

enum Fruit {
Apple,
Orange,
Melon,
}
let fruit: Fruit = Fruit.Apple;
fruit = Fruit.Orange //works
fruit = 'grapes' // Wont work. You know why right? 
fruit = Fruit.Grapes // No No

// 8. Array

let records : number[] = []; // only numbers in array
let boxes = [] // any[]

records.push(1) // works
records.push(12.5) // works
records.push('Haha!') // Ohh.! I can't allow you as you are laughing!
boxes.push(44) // works
boxes.push('Haha!') // works
boxes.push(true) // works

// 9. Object

let someObj: object = {}; // not recommended
someObj = {
 someNo: 123, 
 someString: 'hi there!', 
 sayHi: () => { console.log('Hi') } 
};

let anotherObject: { someNo: number; someString: string; sayHi: () => void } = {} // better to define object property types aswell. this will still throw error as you are assigning object empty. dont assign it. 

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
    return 'Hey Im returning. but compiler allows as it is void'
  }
}
```
##### 5. Functions and Classes:

```typescript
// 1. Function type //dont care about args and return
let someTypedFunction: Function = () => {
  console.log('I dont care about no.of args passed and return type aswell');
}
// wont work because you need to return number in function code
let someTypedFunction = ():number => {
  console.log('I dont care about no.of args passed and return type aswell');
}

// valid if args and return type satisfies
const someTypedFunction2 = (a: number, b: number): number => {
  const sum: number = a + b;
  return sum;
}
someTypedFunction2(5,8) // works
someTypedFunction2(5,'8') // wont work
someTypedFunction2(5,8, 2) // wont work. args are more than defined

// wont work coz return type is different
const someTypedFunction3 = (a: number, b: number):number => {
  const sum: number = a + b;
  return 'Hey are you there?';
}

//  classes
class Person {
  // property type declaration
  name: string;
  age: number = 0; // defaults to 0
  constructor(name: string, age: number) {
    // valid
    this.name = name;
    this.age = age;
  }
}
let person = new Person('Kiran', 22) // works
person = new Person(22, 'Kiran') // wont work
person = new Person(22)

```

##### 6. Compose Types, Interfaces, Unions:

```typescript

type JustNumber = number;
type Person = {
  name: string,
  age: number,
  favColors: string[]
}
const someNumber: justNumber = 12;
let somePerson: Person;

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
let ab: AOrB ={
  a:'text1',
  b:'text2'
}
// works
ab = {
  c: 'text',
  d: 22
}

// wont work
ab = {
  e:22,
  f:34
}

// wont work
ab = {
  a: 22,
  b: 32
}

// a should be either string or array of strings
function unionFunction (a: string | string[]){
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
  a:'test',
  b:'test2'
}
// wont work because you need to define all
bc = {
  a : 'test'
}
```

##### 7. Generics:

```typescript
// we do not know what will be the return type of this function
function AnyFunction (input: any){
  return any;
}
const resp = AnyFunction(12) // resp type will be any

// with generics:  <T> specifies type variable and also it specifies the arguments type and return type values.
function anyFunction1<T>(input: T){
  return input;
}

// initializations
const response: string = anyFunction1<string>('welcome');
const response2: number = anyFunction1<number>(12);

// typeof 
let s = "hello";
let q = 4
let n: typeof s; // n will be string aswell
let p: typeof q; // p will be number type
function f() {
  return { x: 10, y: 3 };
}
type R = typeof f; // type of R will be object with number properties as 'f'
```