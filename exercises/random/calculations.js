function arithmetic(a, b, operator) {
  return operator === "+"
    ? add(a, b)
    : operator === "-"
    ? subtract(a, b)
    : operator === "*"
    ? multiply(a, b)
    : operator === "/"
    ? divide(a, b)
    : "Invalid operator. Please try again with +, -, *, or /.";
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

console.log(arithmetic(4, 7, "+"));
console.log(arithmetic(50, 20, "-"));
console.log(arithmetic(7, 8, "*"));
console.log(arithmetic(150, 25, "/"));
console.log(arithmetic(5, 5, "wussup"));

module.exports = arithmetic;
