function arithmetic(a, b, operator) {
  return operator(a, b);
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

console.log(arithmetic(4, 7, add));

module.exports = arithmetic;
