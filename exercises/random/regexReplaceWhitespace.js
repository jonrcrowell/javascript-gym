/*
    Test.assertEquals(countWords("Hello"), 1);
    Test.assertEquals(countWords("Hello, World!"), 2);
    Test.assertEquals(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), 19);
    Test.assertEquals(countWords(""), 0);
    Test.assertEquals(countWords("With! Symbol@ #Around! (Every) %Word$"), 5);
    Test.assertEquals(countWords("Dear   Victoria, I love  to press   space button."), 8);
*/

const countWords = string => {
  return string
    .replace(/\s+/g, " ")
    .trim()
    .split(" ").length;
};

console.log(countWords("Dear   Victoria, I love  to press   space button."));
