const swapValues = require("../../exercises/random/swapValues");

describe(`swapValues()`, () => {
  it(`must swap the order of the two values passed in`, () => {
    expect(swapValues([1, 7])).toStrictEqual([7, 1]);
    expect(swapValues(["homer", "simpson"])).toStrictEqual([
      "simpson",
      "homer"
    ]);
  });
});
