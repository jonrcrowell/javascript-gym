function fillArrayThrough(number) {
  return number < 0
    ? "Please pass in a positive number."
    : [...Array(number).keys()];
}

function fillArrayFromOneThrough(number) {
  return number < 0
    ? "Please pass in a positive number."
    : [...Array(number + 1).keys()].slice(1);
}

console.log(fillArrayThrough(5)); // [0, 1, 2, 3, 4]
console.log(fillArrayFromOneThrough(5)); // [1, 2, 3, 4, 5]

const fillArrayBetween = (x, y) => {
  const res = [];
  for (let i = x; i <= y; i++) {
    res.push(i);
  }
  return res;
};

console.log(fillArrayBetween(-2, 7));
