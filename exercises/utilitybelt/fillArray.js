function fillArrayThrough(number) {
  return number < 0
    ? "Please pass in a positive number."
    : [...Array(number + 1).keys()];
}

console.log(fillArrayThrough(20));
