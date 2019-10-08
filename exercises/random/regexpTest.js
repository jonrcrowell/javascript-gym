/*
    Test.assertEquals(''.digit(), false);
    Test.assertEquals('7'.digit(), true);
    Test.assertEquals(' '.digit(), false);
    Test.assertEquals('a'.digit(), false);
    Test.assertEquals('a5'.digit(), false);
    Test.assertEquals('14'.digit(), false);
*/
const testThis = "7";
const result = str => /^[0-9]$/.test(str); // the ^ and $ limit this to a single character, not sure exactly how this works

console.log(result(testThis));
