/*
    Test.assertSimilar(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
    Test.assertSimilar(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
    Test.assertSimilar(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
    Test.assertSimilar(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");
*/

function splitAndMerge(str, sp) {
  let merged = str.split(sp).map(x => x.split(""));
  merged.map(x => {
    x.join(sp);
  });
  // .join(sp);
  // return merged.join(" ");
  return merged;
}

console.log(splitAndMerge("My name is John", " "));
