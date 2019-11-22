/*

    shift each letter by a given number but the transformed letter must be a letter (circular shift),
    replace each digit by its complement to 9,
    keep such as non alphabetic and non digit characters,
    downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
    reverse the whole result.

Test.assertEquals(playPass("I LOVE YOU!!!", 1), "!!!vPz fWpM J")

Test.assertEquals(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2), 
    "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")
*/

function playPass(phrase, shift) {
  const encoded = phrase
    .toLowerCase()
    .split("")
    .map((x, i) => {
      const code = x.charCodeAt();
      if (code >= 97 && code <= 122) {
        x = String.fromCharCode(((code + shift - 97) % 26) + 97);
        x = i % 2 === 0 ? x.toUpperCase() : x.toLowerCase();
      }

      if (code >= 48 && code <= 57) {
        x = 9 - x;
      }
      return x;
    });
  return encoded.reverse().join("");
}
console.log(playPass("zzzMY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2));
