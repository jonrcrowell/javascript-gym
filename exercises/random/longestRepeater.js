function longestRepetition(s) {
  if (s.length === 0) return ["", 0];

  let champSoFar = [null, 0];
  let reps = 1;

  s.split("").forEach((x, i) => {
    if (i === s.length) return;
    if (x === s[i + 1]) {
      reps += 1;
    } else {
      if (reps > champSoFar[1]) champSoFar = [x, reps];
      reps = 1;
    }
  });
  return champSoFar;
}

console.log(longestRepetition("aaaaabbbbbcccccc"));
