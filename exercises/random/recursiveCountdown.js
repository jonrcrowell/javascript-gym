function countdown(myArray, n) {
  if (n < 1) return [];

  countdown(myArray, n - 1);
  myArray.unshift(n);
  return myArray;
}

console.log(countdown([], 7));
