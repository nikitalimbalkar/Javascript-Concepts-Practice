// //1. double the ARRAY

let number=[1, 2, 3, 4, 5];

const double= number.map(n=>n*2);
console.log(double);

// //2. Convert Numbers to Strings

const num = [10, 20, 30];

const result=num.map(num=>num.toString());
console.log(result);

//5. add MR. to names

const names = ["Rahul", "Amit", "Suresh"];

const prefixnames= names.map( name => "MR. "+name);
console.log(prefixnames);

// Get Length of Each Word

const words = ["apple", "banana", "kiwi"];

const wordslengths =words.map(words => words.length);
console.log(wordslengths);

//9.  Convert Prices to GST-Included Prices

const prices = [100, 200, 300];

const pricesWithGST = prices.map(price => price + (price * 18 / 100));
console.log(pricesWithGST);

//10. Extract User Names

const users = [
  { id: 1, name: "Anil", age: 25 },
  { id: 2, name: "Sunil", age: 30 },
  { id: 3, name: "Ravi", age: 15 }
];

//11.Filter Adults
// const adultnames = users.filter(user=> user.age>=18)
//                    .map(user => user.name);
// console.log(adultnames);

//  Get Names of Adults Only
const adultnames = users.filter(user=> user.age>18)
                   .map(user => user.name);
console.log(adultnames);

//12. Product Price Update
//Increase price by 10% for all products
//Return a new array (do not modify original)

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 15000 }
];


const updatedProducts = products.map(product => ({
  name:product.name,
  price: product.price + (product.price * 10 / 100)
}));

console.log(updatedProducts);


//13.Filter Expensive Products
const expensiveProducts = updatedProducts.filter(
  product => product.price > 20000
);

console.log(expensiveProducts);

//15. Student Result Summary
//Filter students who passed (marks ≥ 40)
//Return a new array with only their names in uppercase

const students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 35 },
  { name: "Karan", marks: 70 }
];


const passedStudentNames = students.map(
  student => student.name.toUpperCase()
);

console.log(passedStudentNames);

//Problem: Filter and Transform Student Scores
const scores = [25, 45, 60, 30, 80, 50];

const studentscores = scores
  .filter(score => score >= 45)
  .map(score => score + 5);

console.log(studentscores);
