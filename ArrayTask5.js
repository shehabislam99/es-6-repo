const employees = [
  { id: 1, name: "Sam", salary: 5000 },
  { id: 2, name: "John", salary: 7000 },
  { id: 3, name: "Sara", salary: 4000 },
];

const salaryIncrease = employees.map((emp) => ({
  name: emp.name,
  salary: emp.salary * 1.1,
}));
console.log(salaryIncrease);

// Task: Create a new array of employee names with their salaries increased by 10%.
