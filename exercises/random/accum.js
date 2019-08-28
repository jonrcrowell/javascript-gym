/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

const alphaString = "cwAt";

console.log(accum(alphaString));

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