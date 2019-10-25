var name = "Abe";

var greet_abe = function() {
  return "Hello, " + name + "!";
};

const newname = "Ben";

var greet_ben = function() {
  return "Hello, " + newname + "!";
};

console.log(greet_abe());
console.log(greet_ben());

const greet = () => `Hello ${name}`;

console.log(greet("Ben"));
