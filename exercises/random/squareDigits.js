const squareDigits = number =>
  parseInt(
    number
      .toString()
      .split("")
      .map(x => Math.pow(x, 2))
      .join("")
  );

console.log(squareDigits(9119)); // 811181
console.log(squareAll(9119)); // 811181

function squareAll(number) {
  return parseInt(
    number
      .toString()
      .split("")
      .map(x => Math.pow(x, 2))
      .join("")
  );
}
