const combineMaps = require("./combineMaps");

test("should be able to combine maps", () => {
  const map1 = new Map().set(1, "one").set(2, "two");
  const map2 = new Map().set(3, "three").set(4, "four");
  const combined = combineMaps(map1, map2);
  expect([...combined]).toEqual([
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"]
  ]);
});

test("combined maps should be deeply equal", () => {
  const map1 = new Map().set(1, "one").set(2, "two");
  const map2 = new Map().set(3, "three").set(4, "four");
  const combined = combineMaps(map1, map2);
  expect([...combined]).toMatchObject([
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"]
  ]);
});
