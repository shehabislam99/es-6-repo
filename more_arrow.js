// Discount
// 20/100*100

// const getTax = (amount, taxrate) => (amount * taxrate) / 100;
const add = (p, q) => p + q;

// single parameter
const getSquare = (x) => x * x;
const getHalf = (num) => num / 2;
const firstElement = (nums) => nums[2];
const logIt = () => console.log(78);

console.log(getSquare(8));
console.log(getHalf(18));
console.log(firstElement([29, 65, 47]));
console.log(logIt());

// annymous Function
// document.getElementById('').addEventListener('click',event =>{

// })
document.getElementById("btn-click").addEventListener("click", (event) => {});
// () => {

// }
/* 1. Syntax:
Normal function
function add(a, b) {
  return a + b;
}

Arrow function
const add = (a, b) => a + b;

Arrow functions are shorter and more concise.

🔹 2. this Binding:

Normal function → this depends on how the function is called.
Arrow function → this is lexically bound (inherits this from the surrounding scope).
Example:

function normalFunc() {
  console.log(this); // 'this' refers to the object that called it
}

const arrowFunc = () => {
  console.log(this); // 'this' refers to the enclosing scope
};

🔹 3. arguments Object:
Normal function → has access to the special arguments object.
Arrow function → does not have arguments.
Example:

function normal(a, b) {
  console.log(arguments); // [a, b]
}

const arrow = (a, b) => {
  console.log(arguments); // ❌ ReferenceError
};

🔹 4. Constructors:
Normal function → can be used as a constructor with new.
Arrow function → cannot be used as a constructor.

function Person(name) {
  this.name = name;
}
const p = new Person("Ali"); // ✅ works

const PersonArrow = (name) => {
  this.name = name;
};
const p2 = new PersonArrow("Ali"); // ❌ TypeError

🔹 5. Methods in Objects:
Best practice: use normal functions for methods that need this.
Arrow functions don’t bind their own this, so they’re not good for methods.

const obj = {
  value: 10,
  normalFunc: function () {
    return this.value; // ✅ works
  },
  arrowFunc: () => {
    return this.value; // ❌ undefined
  }
};

🔹 6. Hoisting:
Normal function declarations are hoisted.
Arrow functions (assigned to variables) are not hoisted.

sayHello(); // ✅ works
function sayHello() {
  console.log("Hello");
}

greet(); // ❌ ReferenceError
const greet = () => console.log("Hi");


Summary Table
Feature   	       Normal Function	    Arrow Function
Syntax	               Longer	            Shorter
this	                    Dynamic	             Lexical
arguments	              Available	           Not available
Constructor(new)	       Yes	               No
Methods in objects     Recommended	           Not suitable
Hoisting	                 Yes	               No
*/
