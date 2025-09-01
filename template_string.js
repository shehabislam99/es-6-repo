// const poem = 'twinkle twinkle little star
// how i wonder what you are'
// const poem =
//   "twinkle twinkle little star\n" +
//   "how i wonder what you are\n" +
//   "little little sky";

const poem = `twinkle twinkle little star
how i wonder what you are
little little sky`;
// console.log(poem);

function sum(num1, num2) {
  const result = num1 + num2;
  //   const output = "sum of " + num1 + " and " + num2 + " is equal to " + result;
  const output = `sum of ${num1 * 3} and ${num2} is equal to ${result}`;
  console.log(output);
}
sum(9, 20);

const price = 50;
const discountedPrice = `Discounted price is after 20% discount ${price * 0.8}`;
console.log(discountedPrice);
