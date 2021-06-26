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
let someTypedFunction = (): number => {
  console.log('I dont care about no.of args passed and return type aswell');
  return 1
}
someTypedFunction()
const someTypedFunction2 = (a: number, b: number): number => {
  const sum: number = a + b;
  return 'Hey are you there?';
}
someTypedFunction2(4, 5)