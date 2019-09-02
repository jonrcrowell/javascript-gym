module.exports = combineMaps;

function combineMaps(map1, map2) {
  return new Map([...map1, ...map2]);
}

const m = new Map([[true, "yes"], [false, "no"]]);
const result = [m.length, m.size];
console.log(result); // [undefined,2]  collections with indexes have lengths, otherwise size

const m1 = new Map([[true, "a"], [true, "b"]]);
console.log(m1.get(true)); // first result wins? WRONG COWBOY! Last one wins
// so my guess is that the second entry simply overwrites the first
// keys must be unique
console.log(m1.size); // 1? Correct

const m2 = new Map([[true, "a"], ["true", "b"], [true, "c"]]);
console.log(m2.size); // 3? WRONG COWBOY! Keys are unique. There is only one entry with a key of true
console.log(m2.get(true)); // "c"? Correct
console.log(m2.get("true")); // "b"? Correct

const map1 = new Map().set(1, "one").set(2, "two");
const map2 = new Map().set(3, "three").set(4, "four");
const combined = combineMaps(map1, map2);
console.log(combined);
