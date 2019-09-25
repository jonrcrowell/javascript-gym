/*

Test.describe("Basic tests",_=>{
    Test.assertEquals(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
    Test.assertEquals(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
});
*/

function twoSort(s) {
  return s
    .sort()[0]
    .split("")
    .join("***");
}
console.log(
  twoSort([
    "naruba",
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps"
  ])
);
