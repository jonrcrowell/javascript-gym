/*
    Test.assertSimilar(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
    Test.assertSimilar(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
    Test.assertSimilar(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
    Test.assertSimilar(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");
*/

function splitAndMerge(str, sp) {
  return str
    .split("")
    .join(sp)
    .split(`${sp} ${sp}`)
    .join(" ");
}

console.log(splitAndMerge("My name is John", "-"));
