const text =
  "As long as I'm learning something, I figure I'm OK - it's a decent day.";

console.log(letterCount(text));

function letterCount(text) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const hitCount = (string, letter) => {
    const regex = new RegExp(letter, "g");
    return string.match(regex) ? string.match(regex).length : null;
  };
  const counts = [];
  const lettersOnly = text.replace(/[^a-z]/gi, "").toLowerCase();
  letters.split("").forEach(x => {
    const count = hitCount(lettersOnly, x);
    if (count) counts.push([x, count]);
  });
  return counts.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
  });
}
