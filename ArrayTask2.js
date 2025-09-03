const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Pen", price: 2 },
];
const costLessThan100 = products.find((products) => products.price < 100);
console.log(costLessThan100);

// Task: Return only the products that cost less than 100.
