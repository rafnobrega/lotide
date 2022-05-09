const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPosition", () => {
  it(`should return "[1]" when passing "hello" and looking for the index of "e" letter`, () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it(`should return "[0, 2, 3]" when passing "mummy" and looking for the indexes of "m" letter`, () => {
    assert.deepEqual(letterPositions("mummy").m, [0, 2, 3]);
  });
});

// console.log(assertArraysEqual(letterPositions("hello").e, [1]));
// assertArraysEqual(letterPositions("mummy").m, [0, 2, 3]);
