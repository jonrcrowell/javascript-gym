/*
    Test.assertSimilar(cutIt(["ab","cde","fgh"]) , ["ab","cd","fg"]);
    Test.assertSimilar(cutIt(["abc","defgh","ijklmn"]) , ["abc","def","ijk"]);
    Test.assertSimilar(cutIt(["codewars","javascript","java"]) , ["code","java","java"]);
*/

const cutIt = arr =>
  arr.map(x => x.slice(0, Math.min(...arr.map(x => x.length))));

console.log(cutIt(["ab", "cde", "fgh"]));
