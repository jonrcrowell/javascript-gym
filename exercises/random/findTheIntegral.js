/*
In order to find the integral all you need to do is add one to the exponent (the second number), and divide the coefficient by that new number (the first number).

In 3x^2, for example, the integral would be 1x^3 (we added 1 to the exponent, and divided the coefficient by that new number).

integrate(3,2) // => "1x^3"
integrate(12,5) // => "2x^6"
*/

console.log(integrate(3, 2));
console.log(integrate(12, 5));

function integrate(a, b) {
  return `${a / (b + 1)}x^${b + 1}`;
}
