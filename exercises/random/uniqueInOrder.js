/*
Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
*/

function uniqueInOrder(parseMe) {
  const array = typeof parseMe === "string" ? parseMe.split("") : parseMe;
  return array.reduce((accum, curr) => {
    if (accum[accum.length - 1] !== curr) {
      accum.push(curr);
    }
    return accum;
  }, []);
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 3, 3, 3, 4, 5, 2]));
