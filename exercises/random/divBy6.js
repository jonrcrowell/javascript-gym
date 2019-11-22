/*
Test.assertDeepEquals(isDivisibleBy6("1*0"),["120","150","180"])

Test.assertDeepEquals(isDivisibleBy6("*"),["0","6"])

Test.assertDeepEquals(isDivisibleBy6("*1"),[])

Test.assertDeepEquals(isDivisibleBy6("81234567890*"),["812345678904"])

Test.assertDeepEquals(isDivisibleBy6("41*"),["414"])

Test.assertDeepEquals(isDivisibleBy6("34234*2"),["3423402","3423432","3423462","3423492"])

Test.assertDeepEquals(isDivisibleBy6("1234567890123456789012345678*0"),["123456789012345678901234567800", "123456789012345678901234567830", "123456789012345678901234567860", "123456789012345678901234567890"])
*/
const str = "1234567890123456789012345678*0";
console.log(isDivisibleBy6(str));

function isDivisibleBy6(s) {
  const match = [];
  for (let i = 0; i < 10; i++) {
    const candidate = s.replace(/\*/, i);
    // if the number is even and the sum of the digits is divisible by 3, it is also divisible by 6
    if (divBy2(candidate) && divBy3(candidate)) {
      match.push(candidate);
    }
  }
  return match;
}

function divBy2(number) {
  return number.slice(number.length - 1) % 2 === 0;
}

function divBy3(number) {
  return (
    number
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0) %
      3 ===
    0
  );
}
