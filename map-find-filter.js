const student = [
  { id: 1, name: "abul", marks: 50 },
  { id: 2, name: "nabul", marks: 85 },
  { id: 3, name: "kabul", marks: 95 },
  { id: 4, name: "dabul", marks: 15 },
];
const names = student.map((student) => student.marks * 0.65);
const goodStudent = student.filter((student) => student.marks > 80);
const goodStudents = student.find((student) => student.marks > 80);

console.log(goodStudents);
