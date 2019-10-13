function letterCount(s) {
  const counts = {};
  s.split("").forEach(x => {
    if (counts[x]) {
      counts[x] = counts[x] + 1;
    } else {
      counts[x] = 1;
    }
  });
  return counts;
}

console.log(rletterCount("atat"));

function rletterCount(s) {
  const counts = {};
  s.split("").forEach(x => {
    counts[x] = counts[x] ? counts[x] + 1 : 1;
  });
  return counts;
}
