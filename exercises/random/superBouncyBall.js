class Ball {
  constructor(type = "") {
    this.ballType = type;
    if (type === "") this.ballType = "regular";
  }
}

const joe = new Ball();
const batman = new Ball("super");

console.log(joe.ballType);
console.log(batman.ballType);
