/*
Test.assertEquals(duplicateEncode("din"),"(((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
Test.assertEquals(duplicateEncode("(( @"),"))((");
*/

console.log(duplicateEncode("(( @"));

function duplicateEncode(word) {
  const wordArray = word.toLowerCase().split("");
  const counts = {};
  wordArray.forEach(x => {
    counts[x] ? (counts[x] = ")") : (counts[x] = "(");
  });
  return wordArray.map(x => (x = counts[x])).join("");
}
