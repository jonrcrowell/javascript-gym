/*
you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', 
if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.
Test.assertEquals(well(['bad', 'bad', 'bad']), 'Fail!');
Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
*/

console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
);

function well(candidates) {
  const hits = candidates.filter(x => x === "good").length;
  if (hits === 0) return "Fail!";
  if (hits < 3) return "Publish!";
  return "I smell a series!";
}
