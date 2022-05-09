const assert = require("chai").assert;
const eqObjects = require("../eqObjects");


describe("#eqObjectsTest", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
 
  it(`returns true when comparing objects "ab" and "ba" `, () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
 
  it(`returns fase when comparing objects "ab" and "abc" `, () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });


});

// // TEST CODE:
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
//  // => false

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// // ARRAYS AS VALUES (TESTS):
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
