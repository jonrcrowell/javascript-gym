function sortArrayCI(list) {
  return list.sort(function(a, b) {
    const A = a.toLowerCase();
    const B = b.toLowerCase();
    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }
  });
}

const sortMe = ["Hello", "there", "I'm", "fine"];

console.log(sortArrayCI(sortMe));
