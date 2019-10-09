function swapValues(arr) {
  const [a, b] = [arr[1], arr[0]];
  return [a, b];
}

console.log(swapValues([1, 2]));
