/*
Test.describe("Example tests",_=>{
Test.assertEquals(dutyFree(12, 50, 1000), 166);
Test.assertEquals(dutyFree(17, 10, 500), 294);
Test.assertEquals(dutyFree(24, 35, 3000), 357);
});
*/

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)));
}

console.log(dutyFree(17, 10, 500));
