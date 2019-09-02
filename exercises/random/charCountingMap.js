/* countChars() returns a Map that maps characters to numbers of occurrences.
via Dr. Axel Rauschmayer
axel@rauschma.de
dr-axel.de
*/

function countChars(chars) {
  const charCounts = new Map();
  for (let ch of chars) {
    ch = ch.toLowerCase();
    const prevCount = charCounts.get(ch) || 0;
    charCounts.set(ch, prevCount + 1);
  }
  return charCounts;
}
const result = countChars("AaBcccbbbBBAc");
console.table([...result]);

// can I achieve the same result with an object?
// why yes I can
function oCountChars(chars) {
  const charCount = {};
  for (let ch of chars) {
    ch = ch.toLowerCase();
    const prevCount = charCount[ch] || 0;
    charCount[ch] = prevCount + 1;
  }
  return charCount;
}

const oResult = oCountChars("AaBcccbbbBBAc");
console.table(oResult);
