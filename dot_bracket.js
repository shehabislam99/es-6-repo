const student = {
  name: "rafid",
  1: 50,
  "home-Adress": "kola bagan",
  marks: 90,
};
// dot notation
const studentName = student.name;
// bracket notation
const studentName2 = student["marks"];

console.log(student["home-Adress"]);
for (const key in student) {
  const value = student[key];
}
const propName = "marks";
console.log(student[propName]);
