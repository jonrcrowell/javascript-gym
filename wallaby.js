module.exports = function() {
  return {
    files: ["exercises/*.js"],

    tests: ["tests/*.test.js"],

    env: {
      type: "node",
      runner: "node"
    },

    testFramework: "jest"
  };
};
