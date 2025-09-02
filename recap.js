// var
const tax = 5000;
const eta = 5;
// eta = 2;

const student = {
  name: "nayeem",
  marks: 50,
};
const friends = ["abul", "babul", "dabul"];

// default parameter
function add(num1, num2 = 0) {}

// template string
const dynamicText = `myTax: ${tax} and marks ${student.marks * 1.2} has friend
 ${friends[1]}`;

const innerHTML = `<div>
 <h1>Hello: ${friends.lenghth}</h1>
 <p></p>
 </div>`;

//  arrow function
const add2 = (num1, num2 = 0) => num1 + num2;
const tenTimes = (x) => x * 10;

// spread
const newFriends = [...friends, "dabul", "abul"];

// destructing
const { marks: totalMarks, age = 0 } = student;
// console.log(totalMarks, age);

const [firstFriend] = friends;
