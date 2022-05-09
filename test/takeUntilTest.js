const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#map", () => {
  const data3 = [6, 2, 40, 4, 5, 6];
const result2 = takeUntil(data3, (x) => x % 2 !== 0);

  const data2 = [
    "I've",
    "been",
    "to",
    "Hollywood",
    ",",
    "I've",
    "been",
    "to",
    "Redwood",
  ];

  it(`should return "[ "I've", 'been', 'to', 'Hollywood' ]" for "(x) => x === ","`, () => {
    assert.deepEqual(
      takeUntil(data2, (x) => x === ","),
      ["I've", "been", "to", "Hollywood"]
    );
  });

  it(`should return "[6, 2, 40, 4]" for "(x) => x % 2 !== 0"`, () => {
    assert.deepEqual(
      takeUntil(data3, (x) => x % 2 !== 0),
      [6, 2, 40, 4]
    );
  });
});

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);

// const data3 = [6, 2, 40, 4, 5, 6];
// assertArraysEqual(
//   takeUntil(data3, (x) => x % 2 !== 0),
//   [6, 2, 40, 4]
// );

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// console.log(results2);
