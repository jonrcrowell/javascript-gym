const testString =
  "Your mother was a hamster and your father smelt of eldeberries.";

const hitCount = (pattern, string, flags) => {
  const regex = new RegExp(pattern, flags);
  return string.match(regex).length;
};

console.log(hitCount("r", testString, "g")); // 7

console.log(hitCount("er", testString, "g")); // 4

console.log(hitCount("th", testString, "g")); // 2

console.log(hitCount("y", testString, "gi")); // 2
console.log(hitCount("y", testString, "g")); // 1

console.log(hitCount("our", testString, "g")); // 2

console.log(hitCount("[aeiou]", testString, "g")); // vowels

const hitsArray = string => string.match(/(th)|(er)|(he)/g);
console.log(hitsArray(testString));
