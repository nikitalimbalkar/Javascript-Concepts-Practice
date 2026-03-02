// Find Product of All Numbers
number=  [2, 3, 4];

const result = number.reduce((acc, curr) => acc * curr, 1);
console.log(result);


//Count Total Characters in All Words
character= ["hi", "welcome", "js"];

const  wordscharacters = character.reduce((acc,curr) => acc+curr.length, 0);
console.log(wordscharacters);

// Convert Array into Comma Separated String (Without join)
arr = ["React", "Node", "Mongo"];

const separatechar = arr.reduce((acc, curr) => {
  return acc === "" ? curr : acc + "," + curr;
}, "");

console.log(separatechar);

// Count Even and Odd Numbers

number =  [1,2,3,4,5,6];

const evenoddcount = number.reduce(
  (acc, curr) => {
    if (curr % 2 === 0) {
      acc.even++;
    } else {
      acc.odd++;
    }
    return acc;
  },
  { even: 0, odd: 0 }
);

console.log(evenoddcount);


//Create Map of Word Lengths

const words = ["hi", "hello", "js", "reduce"];

const wordslength = words.reduce((acc, word) => {
  const len = word.length;

  if (!acc[len]) {
    acc[len] = [];
  }
  acc[len].push(word);
  return acc;
}, {});

console.log(wordslength);

//Find Total Price of Cart
//Calculate total cart value.

const cart = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1500, qty: 1 },
  { name: "Cap", price: 200, qty: 3 }
];

const totalCartValue = cart.reduce((acc, curr) => {
  return acc + (curr.price * curr.qty);
}, 0);

console.log(totalCartValue); 

//Flatten Array Without Using flat()

arr = [[1, 2], [3, 4], [5, 6]];

const flatten = arr.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(flatten); 

// Find Second Largest Number

arr = [10, 5, 8, 20, 15];

const secondLargest = arr.reduce(
  (acc, curr) => {
    if (curr > acc.max) {
      acc.second = acc.max;
      acc.max = curr;
    } else if (curr > acc.second && curr !== acc.max) {
      acc.second = curr;
    }
    return acc;
  },
  { max: -Infinity, second: -Infinity }
).second;

console.log(secondLargest); 


// Build a Real “Group By + Count” Dashboard
//Count how many employees exist in each department.

const employees = [
  { name: "A", dept: "IT" },
  { name: "B", dept: "HR" },
  { name: "C", dept: "IT" },
  { name: "D", dept: "Finance" },
  { name: "E", dept: "HR" }
];

const dashboard = employees.reduce((acc, curr) => {
  let dept = curr.dept;        
  let empName = curr.name;    

  if (!acc[dept]) {
    acc[dept] = {
      count: 0,
      employees: []
    };
  }

  acc[dept].count += 1;
  acc[dept].employees.push(empName);

  return acc;
}, {});

console.log(dashboard);