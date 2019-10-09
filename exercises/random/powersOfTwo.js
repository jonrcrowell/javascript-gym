function powersOfTwo(n) {
  return [...Array(n + 1).keys()].map(x => x ** 2);
}

console.log(powersOfTwo(2));
