//Create a function outer() that defines a variable message = "Hello"
// Return an inner function that prints that message

function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
  }
  return inner; 
}

const innerFunc = outer(); 
innerFunc(); 

//Create a function createGreeter(name) that returns another function.
 //When called, it should greet the saved name

 function createGreeter(name) {
  return function() {
    console.log(`Hello, ${name}!`);
  };
}

const greetAlice = createGreeter("Alice");
const greetBob = createGreeter("Bob");
greetAlice(); 
greetBob();  

//Create a function createCounter() that returns a function which increments and prints a counter each time it's called.

function createCounter() {
  let count = 0; 
  return function() {
    count++;              
    console.log(count);   
  };
}

const counter = createCounter();
counter(); 
counter(); 
counter(); 


//

function createCounter() {
  let count = 0; 
  return function() {
    count++;
    console.log(count);
  };
}
const counter1 = createCounter();
const counter2 = createCounter();

// counter1
counter1(); 
counter1(); 
//counter 2
counter2(); 
counter1();
 

//Create two counters using your function.
//They must not affect each other.


