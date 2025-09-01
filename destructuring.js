const { price, quality, tax = 7 } = { name: "shirt", price: 500, quality: 7 };
// console.log(price, quality, tax);

// const discount = (product.price * 20) / 100;
// const yourPay = product.price - discount;
// const vatAmount = (product.price * 7) / 100;
// const totalAmont = yourPay + vatAmount;

// const price = product.price;
// const discount = (price * 20) / 100;
// const yourPay = price - discount;
// const vatAmount = (price * 7) / 100;
// const totalAmont = yourPay + vatAmount;

const discount = (price * 20) / 100;
const yourPay = price - discount;
const vatAmount = (price * 7) / 100;
const totalAmont = yourPay + vatAmount;

const device = { name: "phone", brand: "nokia", price: 1200 };
const { brand } = device;

// -----------------------------------//
const number = [25, 88];
const [first, second] = number;
const [math, physics] = [99, 88];
console.log(physics);
