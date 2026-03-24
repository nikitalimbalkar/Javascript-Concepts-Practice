// Looping

//for loop to print number from 1 to 5.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//while loop to print number from 0 to 4

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//Do..while loop to print numbers from 1 to 3

let j = 1;
do {
  console.log(j);
  j++; //if here i++ then infinite loop becoz j=1 true and always return 1 infinte times
} while (j <= 3);

//print["red", "green", "blue"] using for loop

let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//print first 5 multiples of 2 using a for loop

for (let i = 1; i <= 5; i++) {
  console.log(i * 2);
}

//print the length of each word in["hi","hello","hey"].

let words = ["hi", "hello", "hey"];
for (let i = 0; i < words.length; i++) {
  console.log(words[i].length);
}

//use while loop to print numbers from 10 to 15

let num = 10;
while (num <= 15) {
  console.log(num);
  num++;
}

//do..while to print "learning JS" 3 times

let count = 0;
do {
  console.log("Learning JS");
  count++;
} while (count < 3);

//loop through["apple","banana","cherry"] and print each in uppercase

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}

//print the square of numbers from 1 to 4

for (let i = 1; i <= 4; i++) {
  console.log(i * i);
}

//se continue to skip number 3 in printing from 1 to 5

for (let m = 1; m <= 5; m++) {
  if (m === 3) continue;
  console.log(m);
}

//use break to stop the loop at no. 4 when printing 1 to 6

for (let n = 1; n <= 6; n++) {
  if (n === 4) break;
  console.log(n);
}

//print each character of the string "JS" using a loop.

let str = "JS";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//print the sum of no. from 1 to 5

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

//for loop to print even numbers from 2 to 10

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

//print element of[2,4,6,8] using for..of

let arr = [2, 4, 6, 8];
for (let num of arr) {
  console.log(num);
}

//reverse print[1,2,3,4]using a for loop

let array = [1, 2, 3, 4];
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

//use while to print odd no.s from 1 to 9

let f = 1;
while (f <= 9) {
  console.log(f);
  f += 2;
}

//use break to stop searching when you find "cat" in ["dog","cat","bird"]

let pets = ["dog", "cat", "bird"];
for (let pet of pets) {
  if (pet === "cat") break;
  console.log(pet);
}

//use continue to skip negatives numbers in [3,-2,5,-7,9]

let numbers = [3, -2, 5, -7, 9];
for (let num of numbers) {
  if (num < 0) continue;
  console.log(num);
}

//find the sum of even no.s in[1,2,3,4,5,6]

let add = 0;
for (let num of [1, 2, 3, 4, 5, 6]) {
  if (num % 2 === 0) add += num;
}
console.log(add);

//count how many times ["appple", "banana", "apple"]

let fruts = ["apple", "banana", "apple"];
let counting = 0;
for (let fruit of fruts) {
  if (fruit === "apple") counting++;
}
console.log(counting);

//print multiplication table of 3 using a for loop

for (let i = 1; i <= 10; i++) {
  console.log(`3*${i}=${3 * i}`);
}

//print numbers from 1 to 20 but stop when the sum exceeds 50

let total = 0;
for (let i = 1; i <= 20; i++) {
  total += i;
  if (total > 50) break;
  console.log(i);
}
