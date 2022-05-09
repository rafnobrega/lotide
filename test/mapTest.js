const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const numbers = [1, 2, 3, 4];

  it(`should return "["g", "c", "t", "m", "t"]" when passing ["ground", "control", "to", "major", "tom"]and looking for word[0]`, () => {
    assert.deepEqual(
      map(words, (word) => word[0]),
      ["g", "c", "t", "m", "t"]
    );
  });

  it(`should return "[2,4,6,8]" when passing [1, 2, 3, 4] and make each element * 2`, () => {
    assert.deepEqual(
      map(numbers, (potato) => potato * 2),
      [2, 4, 6, 8]
    );
  });
});

// const results1 = map(words, (word) => word[0]); // "word" could be renamed to "potato"
// console.log(results1);

// assertArraysEqual(map(words, (word) => word[0]), ["g", "c", "t", "m", "t"]);
// assertArraysEqual(map(numbers, (potato) => potato * 2), [2, 4, 6, 8]
// );
