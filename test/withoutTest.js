const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it(`should return [2, 3] for ([1, 2, 3], [1])`, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it(`should return ["1", "2"] for (["1", "2", "3"], [1, 2, "3"])`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});

// // TEST CODE
// assertArraysEqual(without(["knife", "fork"], ["knife"]), ["knife"]);
// assertArraysEqual(without(["knife", "fork"], ["knife"]), ["fork"]);

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// // The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// // array.prototype.includes():
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
