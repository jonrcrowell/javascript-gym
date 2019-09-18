/*
Return true if more than 5% of words in array are the word "like"
Test.assertEquals(evalLikes(['today','was','so','like','awesome']),true)
Test.assertEquals(evalLikes(['yesterday','was','even','ummm','better']),false)
*/

const evalLikes = function(words) {
  let likeCount = 0;
  words.map(x => {
    if (x.toLowerCase() === "like") {
      likeCount++;
    }
  });
  return likeCount / words.length > 0.05;
};

console.log(evalLikes(["yesterday", "was", "even", "ummm", "better"]));
