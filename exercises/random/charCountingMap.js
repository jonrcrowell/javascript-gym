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
