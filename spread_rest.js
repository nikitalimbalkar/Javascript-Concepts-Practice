//Rest basic exaples

//Create a function that accepts any number of arguments and returns their sum.

numbers =[1, 2, 3, 4];
function sum(...numbers){
    return numbers.reduce((acc,curr)=>acc+curr,0);
}
console.log(sum(1,2,3,4));

//Write a function that returns how many values were passed.

function countvalues(...values){
    return values.length;
}
console.log(countvalues(1,2,3,4));

//Write a function that prints:
//First argument separately
//Remaining arguments as an array


function printArgs(first, ...rest) {
  console.log("First argument:", first);
  console.log("Remaining arguments:", rest);
}

printArgs(10, 20, 30, 40, 50);

//Create a function using REST that returns the largest number.

function findlargest(...numbers){
    return Math.max(...numbers);
}
console.log(findlargest(10,20,30,40,50));

// Create a Shopping Cart

function addToCart(userName, ...items) {
  return userName + " added " + items.length + " items";
}

console.log(addToCart("Nikita", "Shirt", "Shoes", "Cap"));

//Remove a Property Using REST

const user = {
  name: "Nikita",
  age: 30,
  city: "Delhi"
};

const { age,...rest} = user
console.log(rest);


//spread basic examples

// Copy an Array

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);

//Merge Two Arrays

const frontend = ["HTML","CSS"]
const backend = ["Node","DB"]
const mergedArray = [...frontend, ...backend];
console.log(mergedArray);

// Insert Value in Between

const arr = [1, 2, 4, 5];
const newValue = [...arr.slice(0, 2), 3, ...arr.slice(2)];
console.log(newValue);

//Clone an Object
{
const user = {
  name: "Nikita",
  age: 22
};

const newUser = {
  ...user,
  status: "active"
};

console.log(newUser);
}


//Override Property

const oldConfig = { theme: "light" };
const newConfig = { ...oldConfig, theme: "dark" };
console.log(newConfig);

// Merge Two Objects

const basic = { name:"Sam" }
const details = { age:25, city:"Pune" }
const mergedObject = { ...basic, ...details };
console.log(mergedObject);  

//Combine Multiple Arrays

page1 = [1,2]
page2 = [3,4]
page3 = [5,6]

const combinedPages = [...page1, ...page2, ...page3];
console.log(combinedPages);

//Convert Function Arguments into Array

function toUpperCaseAll(...args) {
  return args.map(function(item) {
    return item.toUpperCase();
  });
}

console.log(toUpperCaseAll("apple", "banana", "mango"));


//Immutable Update 
//Update this object without mutating original:


const state = { name: "User", loggedIn: false };

const newState = {
  ...state,
  loggedIn: true
};

console.log(newState);
console.log(state);

//Merge Arrays Without Duplicates

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let mergedArray1 = [...new Set([...array1, ...array2])];
console.log(mergedArray1);

// Separate One Field, Keep Rest

const employee = {
  id:101,
  name:"John",
  salary:50000,
  department:"IT"
}

const { salary, ...employeeWithoutSalary } = employee;
console.log(employeeWithoutSalary);
console.log(salary);

// Dynamic Average Calculator
// function that calculates the average of unlimited numbers using REST.


function calculateAverage(...numbers) {
  const total = numbers.reduce((acc, curr) => acc + curr, 0);
  return total / numbers.length;
}
console.log(calculateAverage(10, 20, 30, 40, 50));

//Pass Array to Function Using Spread

function multiply(a,b,c){
    return a*b*c;

}
const nums = [2,3,4]
console.log(multiply(...nums));

//Nested Object Copy Issue (Conceptual)

const user1 = {
  name: "John",
  address: {
    city: "Mumbai",
    pin: 400001
  }
};

const newUser = { ...user1 };
newUser.address.city = "Pune";
console.log(user1);
console.log(newUser);

//Build Your Own Math Utility
//Create functions using REST:
//add()
//subtract()
//multiplyAll()
//Each should accept unlimited inputs.

function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(add(10, 20, 30, 40));

function subtract(...numbers) {
  return numbers.reduce((acc, num) => acc - num);
}
console.log(subtract(100, 20, 10));

function multiplyAll(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

console.log(multiplyAll(2, 3, 4, 5));
