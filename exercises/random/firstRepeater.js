/*
Test.assertEquals(firstDup('tweet'), 't');
Test.assertEquals(firstDup('Ode to Joy'), ' ');
Test.assertEquals(firstDup('ode to joy'), 'o');
Test.assertEquals(firstDup('bar'), undefined);
Test.assertEquals(firstDup('123123'), '1');
Test.assertEquals(firstDup('!@#$!@#$'), '!');
*/

function firstDupe(s) {
  let repeat = "";
  for (let i = 0; i < s.length && !repeat; i++) {
    if (s.substring(i + 1).includes(s[i])) {
      repeat = s[i];
    }
  }
  return repeat ? repeat : undefined;
}

console.log(firstDupe("ode to joy"));
