/*
Test.assertEquals("test case".camelCase(), "TestCase");
Test.assertEquals("camel case method".camelCase(), "CamelCaseMethod");
Test.assertEquals("say hello ".camelCase(), "SayHello");
Test.assertEquals(" camel case word".camelCase(), "CamelCaseWord");
Test.assertEquals("".camelCase(), "");
*/

String.prototype.camelCase = function() {
  return this.length < 1
    ? ""
    : this.toLowerCase()
        .trim()
        .split(" ")
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join("");
};

console.log(" honey   badger ".camelCase());
