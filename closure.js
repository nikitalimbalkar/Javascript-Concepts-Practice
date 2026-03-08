// Closure allows a function to remember variables from its outer scope even after the outer function has executed  


//1. Create a function outer() that defines a variable message = "Hello"
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

//2. Create a function createGreeter(name) that returns another function.
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

//3. Create a function createCounter() that returns a function which increments and prints a counter each time it's called.

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


//4. Create two counters using your function.
//They must not affect each other.

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
 




//5. Create a function createBankAccount(initialBalance).

function createBankAccount(initialBalance) {
  let balance = initialBalance; 

  function deposit(amount) {
    balance += amount;
  }

  function withdraw(amount) {
    balance -= amount;
  }

  function getBalance() {
    return balance;
  }

  return {
    deposit,
    withdraw,
    getBalance
  };
}

//6. Create a function multiplier(factor) that returns another function to multiply numbers by that factor.


const double = multiplier(2);
console.log(double(5)); 

const triple = multiplier(3);
console.log(triple(5)); 