function sumConsecutives(s) {
  const sums = [];
  sums.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    const curr = s[i];
    const prev = s[i - 1];
    if (curr === prev) {
      sums[sums.length - 1] += curr;
    } else {
      sums.push(curr);
    }
  }

  return sums;
}

console.log(sumConsecutives([1, 1, 7, 7, 3]));
