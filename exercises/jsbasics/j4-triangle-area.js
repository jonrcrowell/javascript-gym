function printThis(input) {
  document.write(`${input} <br><br>`);
}

printThis("Current Exercise: jsbasic-4.js");

/* 
  https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
  
  Write a JavaScript program to find the area of a triangle
  where lengths of the three of its sides are 5, 6, 7.
  The sides should be arguments to a function, not hard-coded.

*/

// formula to find the area of any triangle if we know the lengths of
// all 3 sides is Heron's formula
// https://www.mathsisfun.com/geometry/herons-formula.html
// how do I write this in Javascript?

const side1 = 8;
const side2 = 4;
const side3 = 7;

function triangleArea(side1, side2, side3) {
  // need to look up the actual math for this
  const halfPerimeter = (side1 + side2 + side3) / 2;
  const squaredArea =
    halfPerimeter *
    (halfPerimeter - side1) *
    (halfPerimeter - side2) *
    (halfPerimeter - side3);
  return Math.sqrt(squaredArea);
}

const area = triangleArea(side1, side2, side3);

if (!area) {
  printThis(
    `You can't make a triangle with the lengths of the sides you specified.`
  );
} else {
  printThis(
    `The area of a triangle with lengths 
    of the sides ${side1}, ${side2}, and ${side3} is ${area}.`
  );
}
