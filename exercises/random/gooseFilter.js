function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  // return an array containing all of the strings in the input array except those that match strings in geese
  const noGeese = [];
  birds.map(x => {
    if (!geese.includes(x)) {
      noGeese.push(x);
    }
  });

  return noGeese;
}

function gooseFilterClean(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird));
}
