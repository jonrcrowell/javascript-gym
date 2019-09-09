/*
decodeMorse('.... . -.--   .--- ..- -.. .')
should return "HEY JUDE"
".... . -.--   ...---...   .--- ..- -.. ."
*/

// partial list of morse code chars
const MORSE_CODE = {
  "....": "H",
  ".": "E",
  "-.--": "Y",
  ".---": "J",
  "..-": "U",
  "-..": "D",
  "---": "O",
  "...---...": "SOS"
};

const encoded = "   .   .";

console.log(decodeMorse(encoded));

function decodeMorse(code) {
  return code
    .split("   ")
    .map(x =>
      x
        .split(" ")
        .map(x => MORSE_CODE[x])
        .join("")
    )
    .join(" ")
    .trim();
}
