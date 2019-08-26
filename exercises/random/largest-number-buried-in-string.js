const buriedNumber = "b1b85";

function getLargestBuriedNumber(str) {
  let largestNumber = 0;
  let candidate = [];

  for (let i = 0; i <= str.length; i++) {
    const el = str[i];
    if (Number.isInteger(parseInt(el))) {
      candidate.push(el);
    } else {
      const candidateFloat = parseFloat(candidate.join(""));
      if (candidateFloat > largestNumber) {
        largestNumber = candidateFloat;
      }
      candidate = [];
    }
  }
  return largestNumber;
}

console.log(getLargestBuriedNumber(buriedNumber));
/*
Test.assertEquals(solve('gh12cdy695m1'),695);
Test.assertEquals(solve('2ti9iei7qhr5'),9);
Test.assertEquals(solve('vih61w8oohj5'),61);
Test.assertEquals(solve('f7g42g16hcu5'),42);
Test.assertEquals(solve('lu1j8qbbb85'),85);
*/
