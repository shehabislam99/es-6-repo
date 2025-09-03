/**
 * class --> template
 * properties
 * method (a special type of function inside a class without the function keyword)
 *
 * object
 *
 */
class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.location = "spain";
    //     console.log("calling the constractor method", name);
  }
  goal() {
    console.log("score a goal");
  }
  getTeamName() {
    return "barca";
  }
}
const Player1 = new Player("Mike Tyson", 59);
const player2 = new Player("bijoy", 34);
// console.log(Player1);
console.log(Player1 instanceof Player);
console.log(player2);
// Player1.goal();
// console.log(Player1);
