/*
Test.assertSimilar(isOpposite("ab","AB") , true);
Test.assertSimilar(isOpposite("aB","Ab") , true);
Test.assertSimilar(isOpposite("aBcd","AbCD") , true);
Test.assertSimilar(isOpposite("aBcde","AbCD") , false);
Test.assertSimilar(isOpposite("AB","Ab") , false);
Test.assertSimilar(isOpposite("","") , false);
*/

console.log(isOpposite("AB", "ab"));

function isOpposite(s1, s2) {
  if (s1.length === 0 && s1.length === 0) return false;
  if (s1.toLowerCase() !== s2.toLowerCase()) return false;
  const opposite = (a, b) =>
    a.toLowerCase() === b.toLowerCase() && a.charCodeAt(0) !== b.charCodeAt(0);
  let opposites = true;
  for (let i = 0; i < s1.length; i++) {
    if (!opposite(s1[i], s2[i])) {
      opposites = false;
      break;
    }
  }
  return opposites;
}
