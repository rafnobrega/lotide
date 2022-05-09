const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it(`returns [2] as the middle element of [1, 2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3]), ([2]));
  });
  
  it(`returns [] if input is []`, () => {
    assert.deepEqual(middle([]), ([]));
  });
  
  it(`returns [] if input is [1]`, () => {
    assert.deepEqual(middle([1]), ([]));
  });

  it(`returns [2, 3] as the middle elements of [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  
});






// const assertArraysEqual = require("../assertArraysEqual");
// const middle = require("../middle");

// // TEST CODE
// console.log("Log tests ran without assertArraysEqual:")
// console.log(middle([])); // => []
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log("Tests ran using assertArraysEqual calling middle:")
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
