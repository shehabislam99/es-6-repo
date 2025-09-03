class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, age);
    this.breed = breed;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Animal {
  constructor(name, color, age) {
    super(name, age);
    this.color = color;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  meow() {
    console.log(`${this.name} is barking`);
  }
}

class Bird extends Animal {
  constructor(name, species, age) {
    super(name, age);
    this.species = species;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  fly() {
    console.log(`${this.name} is flying`);
  }
}
const dog1 = new Dog("German-Shepard", "deshi", 1);
console.log(dog1);
dog1.eat();

const cat1 = new Cat("Monica", "Lulu", 5);
console.log(cat1);
cat1.meow();

const bird1 = new Bird("kokil", "moina", 3);
console.log(bird1);
bird1.fly();
