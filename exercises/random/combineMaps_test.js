import test from "ava";
import { strict as assert } from "assert";

import { combineMaps } from "./combineMaps";

test("combineMaps", t => {
  const map1 = new Map().set(1, "one").set(2, "two");
  const map2 = new Map().set(3, "three").set(4, "four");
  const combined = combineMaps(map1, map2);
  assert.ok(combined instanceof Map);
  assert.deepEqual(
    [...combined],
    [[1, "one"], [2, "two"], [3, "three"], [4, "four"]]
  );
});
