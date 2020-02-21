/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

const alphaString = "cwAt";

console.log(accum(alphaString));
console.log(mumbler(alphaString));

function accum(str) {
  let letterCount = 1;
  let accumString = "";

  for (const letter of str.toLowerCase()) {
    let letterString = Array(letterCount).fill(letter);
    letterString[0] = letterString[0].toUpperCase();
    letterString = letterString.join("");
    accumString =
      letterCount > 1 ? `${accumString}-${letterString}` : letterString;
    letterCount++;
  }
  return accumString;
}

// practice writing this style of function
function mumbler(str) {
  return str
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

alphaString
  .split("")
  .forEach((c, i) => console.log(`${c} is in ${i} position`));

module.exports = accum;
