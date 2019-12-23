/*
    (countSmileys([]), 0);
    (countSmileys([':D',':~)',';~D',':)']), 4);
    (countSmileys([':)',':(',':D',':O',':;']), 2);
    (countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);

    -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    -Every smiling face must have a smiling mouth that should be marked with either ) or D.
*/

const countSmileys = arr => {
  if (arr.length === 0) return 0;
  const matches = arr.join("").match(/([:;][-~]?[)D])/g);
  return !matches ? 0 : matches.length;
};

// filtering the array is much cleaner than using multiple if statements
// also don't need to join the array into a string, apply the match to each element in the array
const countSmileys2 = arr =>
  arr.filter(v => /(:|;)(-|~)?(\)|D)/.test(v)).length;

const smileys = [";]", ":[", ";*", ":$", ";-"];

console.log(countSmileys(smileys));
console.log(countSmileys2(smileys));
