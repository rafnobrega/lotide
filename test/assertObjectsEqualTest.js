// const assertObjectsEqual = require("../assertObjectsEqual");
// const assert = require("chai").assert;


// describe("#assertObjectsEqual", () => {
//   it(`returns passed when comparing { a: "1", b: 2 } to { b: 2, a: "1" } `, () => {
//     assert.strictEqual(assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" }));
//   });
//   it(`returns failed when comparing { a: "1", b: 2 }, { b: 2, a: "3" } `, () => {
//     assert.strictEqual(assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "3" }));
//   });

//   it(`returns passed when comparing { a: "3", b: 2, c: [2, 2] }, { b: 2, a: "3", c: [2, 2] } `, () => {
//     assert.strictEqual(assertObjectsEqual({ a: "3", b: 2, c: [2, 2] }, { b: 2, a: "3", c: [2, 2] }));
//   });

// });

// TEST CODE:
// assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" });
// assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "3" });
// assertObjectsEqual({ a: "3", b: 2 }, { b: 2, a: "3" });
// assertObjectsEqual({ a: "3", b: 2, c: [2, 2] }, { b: 2, a: "3", c: [2, 2] });
// assertObjectsEqual({ a: "3", b: 2, c: [2, 2] }, { b: 2, a: "3", c: [1, 2] });

// assertObjectsEqual(
//   { a: "1", b: 2, c: { d: 3 } },
//   { b: 2, a: "1", c: { d: 3 } }
// );
