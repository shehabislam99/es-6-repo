const numbers = [1, 5, 6, 2, 6, 45, 3, 7];
const firstEven = numbers.find((x) => x % 2 === 0);
// console.log(firstEven);

// const greaterThan50 = numbers.find((num) => num > 50);
const greaterThan50 = numbers.find((num) => num > 4);
console.log(greaterThan50);
