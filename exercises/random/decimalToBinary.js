function countOnes(n) {
  const toBinary = number => (number >>> 0).toString(2);

  return toBinary(n)
    .split("")
    .filter(x => x === "1").length %
    2 ===
    0
    ? "Even 1s"
    : "Odd 1s";
}

console.log(countOnes(1));
console.log(countOnes(2));
console.log(countOnes(3));
