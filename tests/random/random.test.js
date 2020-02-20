const stringTransformer = require("./string-transformer");

test("transform string 'I wanna be a Cowboy' to equal 'cOWBOY A BE WANNA i'", () => {
  expect(stringTransformer("I wanna be a Cowboy")).toBe("cOWBOY A BE WANNA i");
});
