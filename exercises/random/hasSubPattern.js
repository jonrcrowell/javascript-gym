/*
  Test.assertEquals(hasSubpattern("a"), false);
  Test.assertEquals(hasSubpattern("aaaa"), true);
  Test.assertEquals(hasSubpattern("abcd"), false);
  Test.assertEquals(hasSubpattern("abababab"), true);
  Test.assertEquals(hasSubpattern("ababababa"), false);
  Test.assertEquals(hasSubpattern("123a123a123a"), true);
  Test.assertEquals(hasSubpattern("123A123a123a"), false);
  Test.assertEquals(hasSubpattern("abbaabbaabba"), true);
  Test.assertEquals(hasSubpattern("abbabbabba"), false);
  Test.assertEquals(hasSubpattern("abcdabcabcd"), false);
*/

const test = "abcdabcabcd";

const hasSubpattern = string => {
  let match = true;
  if (string && string.length === 1) return false;

  for (let i = 1; i < string.length / 2 + 1; i++) {
    let candidate = string.substring(0, i);
    match = isPattern(candidate, i);
    if (match) break;
  }

  function isPattern(cand, length) {
    let x = 0;
    let y = length;
    match = true;
    for (let i = 0; i < string.length; i += length) {
      const target = string.substring(x + i, y + i);
      if (cand !== target) {
        match = false;
        break;
      }
    }
    return match;
  }
  return match;
};

console.log(hasSubpattern(test));
