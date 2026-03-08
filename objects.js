//  Convert Object to JSON String

const person = {
  name: "Nikita",
  age: 25,
  city: "Pune"
};
const jsonString = JSON.stringify(person);
console.log(jsonString);

// Convert JSON String Back to Object

let data = '{"product":"Laptop","price":55000}';
let obj = JSON.parse(data);
console.log(obj.product);

// Access Nested Property Using Optional Chaining

let user = {
  name: "Amit",
  address: {
    city: "Mumbai"
  }
};

console.log(user.address?.city);
console.log(user.contact?.phone);

// Handle Missing Data Safely

let student = {
  name: "Neha"
};

let city = student.address?.city || "City not available";

console.log(city);

//Make a shallow copy using spread operator.
//Now push "Node" into copied object's skills.

let original = {
  name: "Raj",
  skills: ["JS", "React"]
};

let copy ={...original};
copy.skills.push("Node");
console.log("original", original);
console.log("copy", copy);


// Deep Copy Using JSON Method
//JSON.parse(JSON.stringify(obj))

let originalObj = { name: "anita", skills: ["js", "react", "node"] };
let deepCopy = JSON.parse(JSON.stringify(originalObj));
deepCopy.skills.push("python");
console.log("originalObj", originalObj);
console.log("deepCopy", deepCopy);

//ex

const original1 = { name: "John", address: { city1: "NY" } };
const copy1 = JSON.parse(JSON.stringify(original1));
copy1.address.city1 = "LA";
console.log(original1.address.city1); // NY
console.log(copy1.address.city1); 

//Convert Array of Objects to JSON
//Then convert it back to JS object and print second user's name.

let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

let jsonusers = JSON.stringify(users);
let parsedusers = JSON.parse(jsonusers);
console.log(jsonusers);
console.log(parsedusers[1].name);

//Real-Life API Simulation
//Convert JSON → Object
// Print email safely using optional chaining
//  If email missing → print "Email not found

let response = '{"status":true,"data":{"user":{"name":"Kiran","email":"kiran@gmail.com"}}}';
let parsedResponse = JSON.parse(response);
let email = parsedResponse.data?.user?.email || "Email not found";
console.log(email);

//Find the Bug (Shallow Copy Trap)
//❓ Why did a change?
//a changed because the spread operator makes only a shallow copy.

let a = {
  id: 1,
  details: {
    city: "Delhi"
  }
};

let b = { ...a };
b.details.city = "Chennai";

console.log(a.details.city);

//Build Your Own Deep Copy Function (Conceptual)
//Without using structuredClone
//using JSON.stringify + JSON.parse
//Modify copied object's nested value and prove original is safe.

let obj2 = {
  name: "Test",
  nested: { value: 10 }
};

function deepCopy2(obj2) {
  return JSON.parse(JSON.stringify(obj2));
}
let copiedObj2 = deepCopy2(obj2);
copiedObj2.nested.value = 20;
console.log("Original:", obj2.nested.value); 
console.log("Copied:", copiedObj2.nested.value);
