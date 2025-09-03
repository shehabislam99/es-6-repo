class Vehicle {
  #tin;
  constructor(type, brand, price) {
    this.type = type;
    this.price = price;
    this.brand = brand;
    this.#tin = "34$dj?KK";
  }
  getThis() {
    console.log(this);
  }
  getTin() {
    return this.#tin;
  }
  grtPrice() {
    return this.price;
  }
}
const car1 = new Vehicle("car", "honda", 500000);
const toyota = new Vehicle("car", "Toyota", 400000);
// car1.getThis();
console.log(car1.price);
// console.log(toyota.grtPrice());
// console.log(car1.grtPrice());

const student = {
  name: "Albert Einestine",
  marks: 99,
  getMarks: function () {
    console.log(this);
  },
  getMarksArrow: () => {
    console.log(this);
  },
};
// student.getMarks();
// student.getMarksArrow();
// console.log("ultimate this", this);
