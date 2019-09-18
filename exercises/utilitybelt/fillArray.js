function fillArrayThrough(number) {
  return number < 0
    ? "Please pass in a positive number."
    : [...Array(number + 1).keys()]; // if I want the array to start at 1
  // append .slice(1) to the end of the array
}

console.log(fillArrayThrough(20));
