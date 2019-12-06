/*
Test.assertSimilar(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
Test.assertSimilar(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
Test.assertSimilar(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
Test.assertSimilar(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]);
Test.assertSimilar(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"]);
*/

console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 10, 2, 2]));

function dbSort(a) {
  const numbers = [];
  const words = [];
  for (let i = 0; i < a.length; i++) {
    typeof a[i] === "number" ? numbers.push(a[i]) : words.push(a[i]);
  }
  return [...numbers.sort((a, b) => a - b), ...words.sort()];
}
