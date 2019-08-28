// note that the array starts with zero and
// will have 1 element more than the number given
function fillArrayThrough(number) {
  return number < 0
    ? "Please pass in a positive number."
    : [...Array(number + 1).keys()];
}

const arrayThrough5 = fillArrayThrough(5);
console.log(arrayThrough5);

// in case we want an array that starts at 1 with the given
// number of elements
const startAt1 = arrayThrough5.filter(x => x !== 0);
console.log(startAt1);
