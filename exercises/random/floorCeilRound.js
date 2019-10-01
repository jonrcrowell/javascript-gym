function roundIt(n) {
  const [left, right] = n.toString().split(".");
  return left.length < right.length
    ? Math.ceil(n)
    : left.length > right.length
    ? Math.floor(n)
    : Math.round(n);
}

console.log(roundIt(3.45));
