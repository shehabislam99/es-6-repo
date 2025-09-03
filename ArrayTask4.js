const books = [
  { title: "Book One", pages: 200 },
  { title: "Book Two", pages: 150 },
  { title: "Book Three", pages: 300 },
];
// const result = books.map((books) => books.pages);
// const sum = result.reduce(
//   (accmulator, currentValue) => accmulator + currentValue,
//   0
// );
const sum = books.reduce((accmulator, books) => accmulator + books.pages, 0);
console.log(sum);

// Task: Print each book title with its page count.
