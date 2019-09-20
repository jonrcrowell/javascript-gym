/*
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.
*/

console.log(alphabetized("The Holy Bible_-,()@*&#%`^+=$'")); // "BbeehHilloTy"

function alphabetized(string) {
  return string
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}
