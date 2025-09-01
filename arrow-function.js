//function declaration
function add(num1, num2) {
  return num1 + num2;
}
// function expression
const addition = function (num1, num2) {
  return num1 + num2;
};
// arrow function
const add2 = (num1, num2) => num1 + num2;
const multiply = (a, b) => a * b;
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isFirstBig = (x, y) => x > y;

// multiline arrow function
const doMath = (x, y) => {
  const makeDouble = x * 3;
  const againDouble = y * 3;
  const result = makeDouble + againDouble;
  return result;
};

// const result = add2(12, 45);
const result = doMath(12, 45);
console.log(result);
const multi = multiply(34, 2);
console.log(multi);
const isBig = isFirstBig(56, 12);
console.log(isBig);
