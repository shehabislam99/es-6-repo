const numbers = [87, 118, 5, 91];
console.log(numbers);
console.log(...numbers);

// const max = Math.max(1121, 56, 94, 112, 514, 23);
const max = Math.max(...numbers);
// console.log(max);

// const first = [1, 2, 3, 4];
// const second = first;
// second.push(6);
// console.log(first);
const first = [1, 2, 3, 4];
const second = [...first];
const third = [0, ...first, 95, 90, 43];
second.push(6);
// console.log(first);
// console.log(third);

const ages = [45, 45, 1];
const prices = [98, 65, 45];
const all = [...ages, 555, ...prices];
// console.log(all);

const person = { name: "permisan", age: 25 };
const employee = { designation: "dev", ...person };
// console.log(employee);

// const total = (a, b, c) => a + b + c;
// const result = total(45, 65, 21);
// const digit = [78, 55, 66];
// total(...digit);
// console.log(result);
