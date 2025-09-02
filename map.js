const numbers = [4, 5, 2, 7, 2];
// const doubled = [];
// for (const num of numbers) {
//   const result = num * 2;
//   doubled.push(result);
// }

// const doubleIt = (x) => x * 3;
// const double = numbers.map(doubleIt);

const double = numbers.map((x) => x * 2);
const fiveTimes = numbers.map((x) => x * 5);
const squared = numbers.map((num) => num * num);

const friends = ["zaber", "abul", "nobel", "kabir"];

const nameLengths = friends.map((name) => name.length);
const firstLetters = friends.map((name) => name[0].toLocaleUpperCase());
const result = numbers.map((num, index) => {
  console.log(num * index);
  return index;
});

console.log(result);
