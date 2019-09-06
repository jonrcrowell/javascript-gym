// Higher Order Functions

// 1. Accepts a function as an argument
// 2. May return a new function

// From Kyle Shevlin's egghead.io course

const withCount = fn => {
  let count = 0;

  return (...args) => {
    console.log(`Call count: ${++count}`);
    return fn(...args);
  };
};

const add = (x, y) => x + y;
const countedAdd = withCount(add);

console.log(countedAdd(1, 3));
console.log(countedAdd(1, 13));
console.log(countedAdd(123, 3));
console.log(countedAdd(126, 3234));
