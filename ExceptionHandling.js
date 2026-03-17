//
// 1.Handle Undefined Variable


try {
  console.log(x);    //x undefined
} catch (error) {
  console.log("Variable not found"); //here catch error
}

//2.JSON Parsing Safety

let data = '{"name":"Alex"}';

try{
    let data= JSON.parse(data);
    console.log("Name");
} catch(error) {
    console.log("Invalid JSON");
}


//3. Divide Two Numbers
 
  function division(a,b) {
     if (b===0){
        throw new Error("cannot divided by zero");
     }
     return a/b;
  }
 try{
    console.log(division(10,0));
 }catch(error){
    console.log(error.message);
 }


 //4.use finally*****

 try {
  console.log("Start");
  throw new Error("Something went wrong");   //manual error imp

} catch (error) {
  console.log("Handled Error");   //manual error
//   console,log(error.message);      //actual error
} finally {
  console.log("End");
}


//Validate User Age



function checkAge(age) {
    if (typeof age !== "number") {
      throw new Error("Age must be a number");
    }

    if (age < 18) {
      throw new Error("Age must be 18 or above");
    }
    return "valid age";
}
    try{
    console.log(checkAge(16));
} catch (error) {
    console.log(error.message);
}



//Custom Error Class


class LoginError extends Error {
   constructor(message) {
       super(message);
       this.name = "LoginError";
   }
}
   function login(username) {
  if (!username) {
    throw new LoginError("Username empty");
  }
  console.log("Login successful:", username);
}

try {
  console.log(login(""));
} catch (error) {
   console.log(error.name); 
   console.log(error.message);
}


//Nested Error Handling

try{
    try{
        JSON.parse("Invalid");
    }catch(error){
     console.log("inner error handled");
    }
}catch(error){
    console.log("outer error");
}
