// Is Better

//MARK: 1. Basic Program in JavaScript
console.log("Welcome to JavaScript Basics!"); // Simple print statement

//MARK: 2. Comments in JavaScript
// This is a single-line comment
/*
  This is a multi-line comment
  explaining different concepts below.
*/

//MARK: 3. Variables in JavaScript: var, let, const
var name = "Alice"; // var: function scoped
let age = 25; // let: block scoped
const country = "USA"; // const: block scoped and read-only

console.log("Name:", name, "| Age:", age, "| Country:", country);

//MARK: 4. Data Types in JavaScript
let number = 42; // Number
let str = "Hello, JavaScript!"; // String
let isActive = true; // Boolean
let person = null; // Null
let notDefined; // Undefined
let bigNum = 1234567890123456789012345678901234567890n; // BigInt

console.log(
  "Data Types:",
  typeof number,
  typeof str,
  typeof isActive,
  typeof person,
  typeof notDefined,
  typeof bigNum
);

//MARK: 5. Type Conversion in JavaScript
let numStr = "100";
let convertedNum = Number(numStr); // Converts string to number
console.log(
  "Converted Number:",
  convertedNum,
  " type is : ",
  typeof convertedNum
); // Outputs: 100

let boolValue = false;
let stringBool = String(boolValue); // Converts boolean to string
console.log(
  "Converted String from Boolean:",
  stringBool,
  " type is : ",
  typeof stringBool
); // Outputs: "false"

//MARK: 6. Type Coercion in JavaScript
let result1 = "5" + 5; // Type coercion converts the number to a string
let result2 = "5" - 2; // Type coercion converts the string to a number
console.log("Type Coercion Results:", result1, result2); // Outputs: "55", 3

//MARK: 7. Difference between == and === in JavaScript
console.log("Equality Check:", 5 == "5", 5 === "5"); // true (==), false (===)

//MARK: 8. Arithmetic Operators in JavaScript
let a = 10,
  b = 20;
console.log("Addition:", a + b); // 30
console.log("Subtraction:", a - b); // -10
console.log("Multiplication:", a * b); // 200
console.log("Division:", a / b); // 0.5
console.log("Modulus:", a % b); // 10
console.log("Increment (a):", ++a); // 11
console.log("Decrement (b):", --b); // 19

//MARK: Example Combining All Concepts
let length = 5,
  width = 10; // Declaring variables
let area = length * width; // Using arithmetic operator
console.log("Area of the Rectangle:", area); // Printing the result

let input = "25"; // Example input as a string
let parsedAge = Number(input); // Type conversion to number
console.log("Parsed Age:", parsedAge); // Output: 25

// Comparison: Is the person an adult?
if (parsedAge >= 18) {
  console.log(`${name} is an adult.`);
} else {
  console.log(`${name} is not an adult.`);
}

// Explanation of Coercion
console.log("Coercion Example:", "10" - 2); // Outputs: 8 (string converted to number)
console.log("String Concatenation Example:", "Age is " + age); // Outputs: "Age is 25"

//MARK: 9. Logical Operators in JavaScript
let isStudent = true;
let hasDiscountCard = false;

console.log("Logical AND:", isStudent && hasDiscountCard); // false
console.log("Logical OR:", isStudent || hasDiscountCard); // true
console.log("Logical NOT:", !isStudent); // false

//MARK: 10. Conditional Statements in JavaScript
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

//MARK: 11. Switch Statements in JavaScript
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

//MARK: 12. Loops in JavaScript
// For Loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}

// While Loop
let counter = 1;
while (counter <= 5) {
  console.log("While Loop:", counter);
  counter++;
}

// Do-While Loop
let num = 1;
do {
  console.log("Do-While Loop:", num);
  num++;
} while (num <= 5);

//MARK: 13. Functions in JavaScript
function greetUser(userName) {
  return `Hello, ${userName}!`;
}

console.log(greetUser("Alice")); // Outputs: "Hello, Alice!"

//MARK: 14. Default Parameters in Functions
function calculateSum(x, y = 10) {
  return x + y;
}

console.log("Sum with Default Parameter:", calculateSum(5, 1)); // Outputs: 15

//MARK: 15. Arrays: Basic Operations
let numbers = [10, 20, 30, 40, 50];
console.log("Array Elements:", numbers);

// Accessing elements
console.log("First Element:", numbers[0]);

// Adding an element
numbers.push(60);
console.log("After Push:", numbers);

// Removing the last element
numbers.pop();
console.log("After Pop:", numbers);

//MARK: 16. Objects: Introduction
let student = {
  name: "John",
  age: 22,
  isGraduated: false,
};

// Accessing properties
console.log("Student Name:", student.name);

// Adding a new property
student.course = "Computer Science";
console.log("Updated Student:", student);

//MARK: 17. String Methods in JavaScript
let text = "JavaScript is awesome!";
console.log("Original Text:", text);
console.log("Length:", text.length);
console.log("To Uppercase:", text.toUpperCase());
console.log("Substring (0, 10):", text.substring(0, 10));
console.log("Replaced Text:", text.replace("awesome", "powerful"));

//MARK: 18. Array Methods in JavaScript
let colors = ["red", "blue", "green", "yellow"];

// Adding an element at the start
colors.unshift("purple");
console.log("After Unshift:", colors);

// Removing the first element
colors.shift();
console.log("After Shift:", colors);

// Joining elements
console.log("Joined Colors:", colors.join(", "));

//MARK: 19. Math Object in JavaScript
console.log("PI:", Math.PI);
console.log("Square Root of 16:", Math.sqrt(16));
console.log("Power (2^3):", Math.pow(2, 3));
console.log("Random Number (0-1):", Math.random());

//MARK: 20. Ternary Operator in JavaScript
let isAdult = age >= 18 ? "Yes" : "No";
console.log("Is Adult:", isAdult);

//MARK: Example Combining All Concepts
let score = 45; // Example variable
let grade = score >= 50 ? "Pass" : "Fail"; // Ternary operator
console.log(`Score: ${score}, Grade: ${grade}`); // Outputs: "Score: 45, Grade: Fail"

// Using Loops with Array
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// Using Math and Array Methods
let randomNum = Math.floor(Math.random() * 100); // Random number between 0-99
console.log("Random Number:", randomNum);

fruits.push("orange");
console.log("Updated Fruits:", fruits);

//MARK: 21. Object Destructuring
let user = {
  firstName: "Alice",
  lastName: "Smith",
  age: 30,
};

let { firstName, age: userAge } = user; // Destructuring with renaming
console.log("First Name:", firstName, "| Age:", userAge);

//MARK: 22. Array Destructuring
let coordinates = [10, 20, 30];
let [x, y, z] = coordinates;
console.log("X:", x, "| Y:", y, "| Z:", z);

//MARK: 23. Template Literals
let greeting = `Hello, ${firstName}! You are ${userAge} years old.`;
console.log(greeting);

//MARK: 24. Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let val1 = 10;
let combined = [...arr1, val1]; // Combining arrays
console.log("Combined Array:", combined); // 1,2,3,4,5,6

let updatedUser = { ...user, country: "USA" }; // Adding new property to object
console.log("Updated User:", updatedUser);

//MARK: 25. Rest Parameters
function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("Sum of Numbers:", sumAll(1, 2, 3, 4, 5)); // Outputs: 15

//MARK: 26. Classes in JavaScript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}

let person1 = new Person("John", 25);
person1.introduce();

//MARK: 27. Inheritance in Classes
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Calls the parent class constructor
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  }
}

let emp1 = new Employee("Jane", 28, "Software Developer");
emp1.introduce();
emp1.work();

//MARK: 28. Promises in JavaScript
let fetchData = new Promise((resolve, reject) => {
  Data = fetch("");
  let success = true;
  if (success) {
    resolve("Data fetched successfully!");
  } else {
    reject("Failed to fetch data.");
  }
});

fetchData
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

//MARK: 29. Async/Await in JavaScript
async function getData() {
  try {
    let result = await fetchData; // Using the promise from above
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getData();

//MARK: 30. Fetch API Example
async function fetchAPIData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log("Fetched Data:", data.slice(0, 3)); // Displaying first 3 posts
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchAPIData();

//MARK: 31. JavaScript Modules: Export and Import
// Assume we have another file `mathUtils.js` with the following export:
// export function add(a, b) { return a + b; }
// export const PI = 3.14;

// Importing from mathUtils.js (commented out as it requires file setup)
// import { add, PI } from './mathUtils.js';

// console.log("Addition:", add(2, 3)); // Outputs: 5
// console.log("PI:", PI); // Outputs: 3.14

//MARK: 32. Map and Set in JavaScript
// Map
let myMap = new Map();
myMap.set("name", "Alice");
myMap.set("age", 25);

console.log("Map Value (name):", myMap.get("name"));
console.log("Map Size:", myMap.size);

// Set
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate won't be added

console.log("Set Values:", mySet);

//MARK: 33. JavaScript Date Object
let currentDate = new Date();
console.log("Current Date:", currentDate.toLocaleDateString());
console.log("Current Time:", currentDate.toLocaleTimeString());

//MARK: 34. Error Handling with Try-Catch
try {
  let result = 10 / 0; // No error here, but an example
  if (result === Infinity) throw new Error("Cannot divide by zero.");
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
}

//MARK: Example Combining Intermediate Concepts
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  applyDiscount(discount) {
    this.price -= discount;
    return this.price;
  }
}

let product = new Product("Laptop", 1000);
console.log("Original Price:", product.price);
console.log("Discounted Price:", product.applyDiscount(100));

let productList = [new Product("Phone", 800), new Product("Tablet", 500)];

let discountedProducts = productList.map((p) => ({
  ...p,
  discountedPrice: p.applyDiscount(50),
}));

console.log("Discounted Products:", discountedProducts);

//MARK: 35. DOM Manipulation
// Selecting elements
let heading = document.getElementById("main-heading");
let paragraphs = document.querySelectorAll("p");

// Modifying content
heading.textContent = "Updated Heading!";
paragraphs.forEach((para) => (para.style.color = "blue"));

// Creating new elements
let newElement = document.createElement("div");
newElement.textContent = "This is a dynamically created div!";
document.body.appendChild(newElement);

//MARK: 36. Event Handling in JavaScript
document.querySelector("#button").addEventListener("click", () => {
  alert("Button Clicked!");
});

// Adding event listeners to multiple elements
document.querySelectorAll(".list-item").forEach((item) =>
  item.addEventListener("click", (e) => {
    console.log("List Item Clicked:", e.target.textContent);
  })
);

//MARK: 37. JavaScript Event Bubbling and Delegation
// Event Bubbling
document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent clicked!");
});

// Event Delegation
document.querySelector("#parent").addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("child")) {
    console.log("Child clicked:", e.target.textContent);
  }
});

//MARK: 38. Local Storage and Session Storage
// Local Storage
localStorage.setItem("username", "Alice");
console.log("Stored Username:", localStorage.getItem("username"));

// Session Storage
sessionStorage.setItem("sessionID", "12345");
console.log("Stored Session ID:", sessionStorage.getItem("sessionID"));

//MARK: 39. JavaScript Closures
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

let newClosure = outerFunction("outside");
newClosure("inside");

//MARK: 40. JavaScript Currying
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

let multiplyByTwo = multiply(2);
console.log("Multiplication Result:", multiplyByTwo(5)); // Outputs: 10

//MARK: 41. Throttling in JavaScript
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

window.addEventListener(
  "resize",
  throttle(() => console.log("Throttled Resize Event"), 1000)
);

//MARK: 42. Debouncing in JavaScript
function debounce(func, delay) {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

document.querySelector("#search-input").addEventListener(
  "input",
  debounce(() => console.log("Debounced Input Event"), 300)
);

//MARK: 43. Custom JavaScript Events
let customEvent = new CustomEvent("greet", {
  detail: { name: "Alice" },
});

document.addEventListener("greet", (e) => {
  console.log("Custom Event Triggered:", e.detail.name);
});

document.dispatchEvent(customEvent);

//MARK: 44. Web Workers in JavaScript
if (window.Worker) {
  let myWorker = new Worker("worker.js");

  myWorker.postMessage("Start Worker!");

  myWorker.onmessage = (e) => {
    console.log("Message from Worker:", e.data);
  };
}

//MARK: 45. JavaScript Regex
let regex = /hello/gi;
let testString = "Hello, hello, HELLO!";
let matches = testString.match(regex);
console.log("Regex Matches:", matches);

//MARK: 46. Error Handling: Throwing Errors
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or above.");
  }
  console.log("Age is valid.");
}

try {
  checkAge(15);
} catch (error) {
  console.error("Error:", error.message);
}

//MARK: 47. Performance Optimization in JavaScript
// Example: Using Document Fragments
let fragment = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  div.textContent = `Div ${i}`;
  fragment.appendChild(div);
}

document.body.appendChild(fragment);

//MARK: 48. ES6 Modules and Dynamic Imports
// Assume this is a separate file `utils.js`:
// export const add = (a, b) => a + b;

// Dynamic Import

// (async () => {
//   const { add } = await import("./utils.js");
//   console.log("Dynamic Import Result:", add(3, 4));
// })();

//MARK: 49. JavaScript WeakMap and WeakSet
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "WeakMap Value");
console.log("WeakMap Value:", weakMap.get(obj));

let weakSet = new WeakSet();
weakSet.add(obj);
console.log("WeakSet Contains Object:", weakSet.has(obj));

//MARK: 50. Combining Advanced Concepts
class AdvancedProduct {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  applyDiscount(discount) {
    if (discount < 0 || discount > this.price) {
      throw new Error("Invalid discount amount.");
    }
    this.price -= discount;
  }
}

let advancedProduct = new AdvancedProduct("Gaming Laptop", 1500);

try {
  advancedProduct.applyDiscount(200);
  console.log("Discounted Price:", advancedProduct.price);
} catch (error) {
  console.error(error.message);
}

// Adding advancedProduct to Local Storage
localStorage.setItem("advancedProduct", JSON.stringify(advancedProduct));
console.log(
  "Stored Product:",
  JSON.parse(localStorage.getItem("advancedProduct"))
);

// MARK: 51. Generators and iterators
function* gen() {
  yield 1;
  yield 2;
}
for (let value of gen()) console.log(value);

//MARK: 52. Event Loop, Call Stack, Task Queue
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4"); // Order: 1, 4, 3, 2

//MARK: 53. Optional Chaining & Nullish Coalescing
let user2 = { profile: null };
console.log(user2?.profile?.name ?? "Guest");
