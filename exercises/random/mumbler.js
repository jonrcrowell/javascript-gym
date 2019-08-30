/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

const alphaString = "RqaEzty";

console.log(`Mumbler converts ${alphaString} into ${mumbler(alphaString)}`);

function mumbler(str) {
  const mumble = (letter, index) =>
    letter.toUpperCase() + letter.toLowerCase().repeat(index);
  return str
    .split("")
    .map(mumble)
    .join("-");
}
