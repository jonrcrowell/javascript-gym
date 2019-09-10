/*
Write a method highestRank(arr) (or highest-rank in clojure) 
which returns the number which is most frequent in the given 
input array (or ISeq). 

If there is a tie for most frequent number, 
return the largest number of which is most frequent.

Example:

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
highestRank(arr) //=> returns 3
*/

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
console.log(highestRank(arr)); //=> returns 12

function highestRank(numbers) {
  const counts = {};
  let highest = [];
  numbers.forEach(x => {
    counts[x] = counts[x] ? (counts[x] += 1) : 1;
  });
  let values = Object.values(counts);
  let keys = Object.keys(counts);
  let max = Math.max(...values);
  values.map((x, i) => {
    if (x === max) {
      highest.push(parseInt(keys[i]));
    }
  });

  return Math.max(...highest);
}
