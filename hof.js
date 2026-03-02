//Q1. Print All Elements Using forEach
//print each element of the array using forEach.

arr =  [10, 20, 30, 40];

arr.forEach((element) => {
  console.log(element);
});

// Q2. Print Index + Value
//Using forEach, print both index and value.

fruits = ["apple", "banana", "mango"];

fruits.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});

//Q3. Check if Array Contains a Negative Number (some)
number = [2, 5, -1, 9];

const hasNegative = number.some((num) => num < 0);
console.log(hasNegative);

// Q4. Check if All Students Passed (every)

marks = [78, 55, 90, 34, 88];

const allPassed = marks.every(marks => marks > 35);
console.log(allPassed);


//Q5. Find First Even Number (find)

numbers = [1, 7, 9, 4, 6];

const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); 

// Q6. Find a User Object by ID
//Find the user whose id is 3.

users = [
 {id:1, name:"Anil"},
 {id:2, name:"Neha"},
 {id:3, name:"Rahul"}
];

const user = users.find(u => u.id === 3);
console.log(user);


//Q7. Sort Numbers in Ascending Order (sort)
//Sort the numbers properly (not alphabetically).

 num = [100, 5, 25, 8];

num.sort((a, b) => a - b);
console.log(num); 


//Q8. Sort Objects Based on Salary
//Sort employees by salary (low → high).

employees = [
 {name:"A", salary:50000},
 {name:"B", salary:30000},
 {name:"C", salary:70000}
];

employees.sort((a, b) => a.salary - b.salary);
console.log(employees);

// Q9. Check If Any Product is Out of Stock
//Return true if ANY product has stock = 0.

products = [
 {name:"Laptop", stock:5},
 {name:"Mouse", stock:0},
 {name:"Keyboard", stock:10}
];

const isOutOfStock = products.some(product => product.stock === 0);
console.log(isOutOfStock); 

//Q10. Flatten Nested Array Using flat
//Convert nested array into single array

nestedarr=[1, 2, [3, 4], [5, 6]];

const flatArray = nestedarr.flat();
console.log(flatArray); 






