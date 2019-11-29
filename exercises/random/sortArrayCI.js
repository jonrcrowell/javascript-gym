/*
["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

function sortArray(list) {
  return list.sort(function(a, b) {
    const A = a.toLowerCase();
    const B = b.toLowerCase();
    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }
  });
}

const sortMe = ["Hello", "there", "I'm", "fine"];

console.log(sortArray(sortMe));
