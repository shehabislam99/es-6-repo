const students = [
  { id: 1, name: "David", grade: "A" },
  { id: 2, name: "Eve", grade: "C" },
  { id: 3, name: "Frank", grade: "B" },
];
const StudentGradeB = students.filter((students) => students.grade === "B");
console.log(StudentGradeB);

// Task: Find the first student whose grade is `"B"`.
