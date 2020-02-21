/*
89 = 1
1900 = 19
1980 = 20
*/

console.log(ceilCentury(89));
console.log(ceilCentury(1900));
console.log(ceilCentury(1889));
console.log(ceilCentury(2089));
console.log(ceilCentury(201));

function century(year) {
  const roundUp = year % 100 !== 0;
  const baseCentury = Math.floor(year / 100);
  return roundUp ? baseCentury + 1 : baseCentury;
}

function ceilCentury(year) {
  return Math.ceil(year / 100);
}
