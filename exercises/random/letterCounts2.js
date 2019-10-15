function letterFrequency(text) {
  const keepLetters = text => text.replace(/[^A-Za-z]/g, "");
  const counts = {};
  const letters = keepLetters(text).toLowerCase();
  for (let i = 0; i < letters.length; i++) {
    counts[letters[i]] = counts[letters[i]] ? counts[letters[i]] + 1 : 1;
  }
  const res = Object.entries(counts)
    .sort((a, b) => {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
    })
    .sort((a, b) => b[1] - a[1]);

  return res;
}

letterFrequency(
  "As long as I'm learning something, I figure I'm OK - it's a decent day."
);
