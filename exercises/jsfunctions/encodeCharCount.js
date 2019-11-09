/*
Test.assertEquals(numericals("Hello, World!"), "1112111121311");
Test.assertEquals(numericals("Hello, World! It's me, JomoPipi!"), "11121111213112111131224132411122");
Test.assertEquals(numericals("hello hello"), "11121122342");
Test.assertEquals(numericals("Hello"), "11121");
Test.assertEquals(numericals("aaaaaaaaaaaa"),"123456789101112");
*/

function numericals(s) {
  const charCount = {};
  let encoded = "";
  for (let ch of s) {
    ch = ch.toLowerCase();
    const prevCount = charCount[ch] || 0;
    charCount[ch] = prevCount + 1;
    encoded += prevCount + 1;
  }
  return encoded;
}

console.log(numericals("Hello, World! It's me, JomoPipi!"));
