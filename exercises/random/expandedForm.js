/*

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

I wonder what the arguments are regarding declaring a return variable vs just returning the result
It's easier to debug with the variable
Is there a benefit to removing it after verifying the code works?

Also consider using Math.pow to solve this
e.g.    .split("")
        .reverse()
        .map( (a, i) => a * Math.pow(10, i))

*/
function expandedForm(num) {
  const padWithZeros = (x, i) =>
    x === "0" ? null : x + "0".repeat(num.toString().length - 1 - i);
  const excludeNulls = x => x !== null;

  let answer = num
    .toString()
    .split("")
    .map(padWithZeros)
    .filter(excludeNulls)
    .join(" + ");
  return answer;
}
