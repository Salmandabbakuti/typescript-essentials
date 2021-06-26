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
    return 'Hey Im returning. but compiler is strict.!'
  }
}
```