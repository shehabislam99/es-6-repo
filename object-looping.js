const numbers = [1, 2, 54, 1, 4, 5];
for (const num of numbers) {
  // console.log(num);
}

const employee = {
  name: "raja rani",
  designation: "QA",
  salary: 20000,
  experience: 1,
  age: 22,
};

for (const key in employee) {
  const value = employee[key];
  console.log(key, value);
}
const keys = Object.keys(employee);
console.log(keys);
for (const key of keys) {
  const value = employee[key];
}
