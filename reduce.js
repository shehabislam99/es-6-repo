const numbers = [4, 5, 6, 7, 12, 45];

// let sum = 0;
// for (const num of numbers) {
//   sum = sum + num;
// }

// const total = numbers.reduce((acc, curr) => acc + curr);

const cart = [
  { item: "book", price: 34 },
  { item: "pen", price: 10 },
  { item: "bag", price: 344 },
];
const total = cart.reduce((acc, product) => acc + product.price, 0);

console.log(total);
