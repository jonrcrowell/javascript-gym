/*
  it("child", function() {
    Test.assertEquals(child(m1,m2), true);
    Test.assertEquals(child(m2,m3), true);
  });
  
  it("not child", function() {
    Test.assertEquals(child(m1,m3), false);
  });
  
  it("grandchild", function() {
    Test.assertEquals(grandchild(m1, m3), true);
    Test.assertEquals(grandchild(m1, m2), true);
*/
const m1 = "BWBWBW";
const m2 = "BWBWBB";
const m3 = "WWWWBB";
const bird1 = "WBWWBBB";
const bird2 = "BWBBBBW";

var child = function(bird1, bird2) {
  let differences = 0;
  for (let i = 0; i < bird1.length; i++) {
    if (bird1[i] !== bird2[i]) differences++;
  }
  return differences < 3;
};

var grandchild = function(bird1, bird2) {
  let differences = 0;
  for (let i = 0; i < bird1.length; i++) {
    if (bird1[i] !== bird2[i]) differences++;
  }
  return differences < 4;
};

console.log(child(bird1, bird2));
console.log(grandchild(bird1, bird2));
