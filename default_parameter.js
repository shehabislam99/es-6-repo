function sum(num1, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}
//NaN --> Not a Number
// sum(10);
// sum(10, 40);

function multiply(num1 = 1, num2 = 1) {
  const result = num1 * num2;
  console.log(result);
}
// multiply();

function fullname(first, last = "") {
  const name = first + "" + last;
  console.log(name);
}
fullname("kamruzzaman");

/**
 *
 * some thumb rule of default value. may be useful
 * add,substract -->0
 *
 * multiply -->1
 *
 * string -->''
 *
 * array = []
 *
 * object = {}
 */
