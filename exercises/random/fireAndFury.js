/*
    Test.assertEquals(fireAndFury("FURYYYFIREYYFIRE"), "I am furious. You and you are fired!");
  
    Test.assertEquals(fireAndFury("FIREYYFURYYFURYYFURRYFIRE"), "You are fired! I am really furious. You are fired!");
  
    Test.assertEquals(fireAndFury("FYRYFIRUFIRUFURE"), "Fake tweet.");
*/

const parseMe = "FURYYYFIREYYFIREFIREFIREFIREFIREFIREFIREFIREFIREFIRE";
const parseMe2 = "FIREYYFURYYFURYYFURRYFIRE";
const parseMe3 = "FIREYYFURYYFURYYFURRYFIRE";
const parseMe4 = "AAFIREBBFURYCC";

console.log(fireAndFury(parseMe4));
console.log(fireAndFury("FIRE FURY"));
console.log(fireAndFury(parseMe2));

function fireAndFury(string) {
  const fake = string => string.replace(/[EFIRUY]/g, "").length > 0;
  const getHits = string => string.match(/(FURY)|(FIRE)/g);
  const hits = getHits(string);
  if (!hits || fake(string)) return "Fake tweet.";
  let tweet = [];
  let count = 1;

  const furyString = count => `I am ${"really ".repeat(count - 1)}furious.`;
  const fireString = count => `You ${"and you ".repeat(count - 1)}are fired!`;

  for (let i = 0; i < hits.length; i++) {
    if (hits[i] === hits[i + 1]) {
      count++;
    } else {
      hits[i] === "FURY"
        ? tweet.push(furyString(count))
        : tweet.push(fireString(count));
      count = 1;
    }
  }

  return tweet.join(" ");
}
