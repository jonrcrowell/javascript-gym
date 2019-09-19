/*
A bird flying high above a mountain range is able to estimate the height of the highest peak.

Can you?

Example
The birds-eye view
^^^^^^
 ^^^^^^^^
  ^^^^^^^
  ^^^^^
  ^^^^^^^^^^^
  ^^^^^^
  ^^^^
The bird-brain calculations
111111
 1^^^^111
  1^^^^11
  1^^^1
  1^^^^111111
  1^^^11
  1111
111111
 12222111
  12^^211
  12^21
  12^^2111111
  122211
  1111
111111
 12222111
  1233211
  12321
  12332111111
  122211
  1111
*/

const mountains = [
  "^^^^^^        ".split(""),
  " ^^^^^^^^     ".split(""),
  "  ^^^^^^^     ".split(""),
  "  ^^^^^       ".split(""),
  "  ^^^^^^^^^^^ ".split(""),
  "  ^^^^^^      ".split(""),
  "  ^^^^        ".split("")
];

const peakHeight = function(mountain) {
  // Your code here
  return 1;
};

console.log(peakHeight(mountains));
