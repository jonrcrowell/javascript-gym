/*
var input = [ 4, 3, 9, 7, 2, 1 ];
    var expected = [ 2, 9, 3, 49, 4, 1 ];
    Test.assertSimilar(squareOrSquareRoot(input), expected);
    
    input = [ 100, 101, 5, 5, 1, 1 ];
    expected = [ 10, 10201, 25, 25, 1, 1 ];
    Test.assertSimilar(squareOrSquareRoot(input), expected);
    
    input = [ 1, 2, 3, 4, 5, 6 ];
    expected = [ 1, 4, 9, 2, 25, 36 ];

    https://www.codewars.com/kata/to-square-root-or-not-to-square-root/train/javascript
    
*/

const input = [4, 3, 9, 7, 2, 1];

console.log(squareOrSquareRoot(input));

function squareOrSquareRoot(array) {
  return array.map(x => {
    const square = Math.sqrt(x);
    console.log(square);
    console.log(square % 1);
    return square % 1 === 0 ? square : x ** 2;
  });
}
