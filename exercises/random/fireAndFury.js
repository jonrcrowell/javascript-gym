/*
    Test.assertEquals(fireAndFury("FURYYYFIREYYFIRE"), "I am furious. You and you are fired!");
  
    Test.assertEquals(fireAndFury("FIREYYFURYYFURYYFURRYFIRE"), "You are fired! I am really furious. You are fired!");
  
    Test.assertEquals(fireAndFury("FYRYFIRUFIRUFURE"), "Fake tweet.");
*/

const parseMe = "FURYYYFIREYYFIREFIREFIREFIREFIREFIREFIREFIREFIREFIRE";
const parseMe2 = "FIREYYFURYYFURYYFURRYFIRE";
const parseMe3 = "FIREYYFURYYFURYYFURRYFIRE";

console.log(fireAndFury(parseMe));
console.log(fireAndFury(parseMe2));
console.log(fireAndFury(parseMe3));

function fireAndFury(string) {
  const getHits = string => string.match(/(FURY)|(FIRE)/g);
  const hits = getHits(string);
  if (!hits) return "Fake tweet.";
  let tweet = [];

  for (let i = 0; i < hits.length; i++) {
    if (
      hits[i] === "FURY" &&
      hits[i + 1] === "FURY" &&
      hits[i + 2] === "FURY"
    ) {
      tweet.push("I am really really furious.");
      i += 2;
      continue;
    } else if (hits[i] === "FURY" && hits[i + 1] === "FURY") {
      tweet.push("I am really furious.");
      i++;
      continue;
    }
    if (
      hits[i] === "FIRE" &&
      hits[i + 1] === "FIRE" &&
      hits[i + 2] === "FIRE"
    ) {
      tweet.push("You and you and you are fired!");
      i += 2;
      continue;
    } else if (hits[i] === "FIRE" && hits[i + 1] === "FIRE") {
      tweet.push("You and you are fired!");
      i++;
      continue;
    } else if (hits[i] === "FURY") {
      tweet.push("I am furious.");
    } else if (hits[i] === "FIRE") tweet.push("You are fired!");
  }

  return tweet.join(" ");
}
