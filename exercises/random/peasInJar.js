function friends(n) {
  return n < 3 ? 0 : n % 2 !== 0 ? (n + 1) / 2 - 1 : n / 2 - 1;
}

console.log(friends(6));
