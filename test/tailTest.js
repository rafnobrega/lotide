const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it(`returns 3 for the length of words(array)`, () => {
    assert.strictEqual(words.length, 3);
  });
  it(`returns ["Lighthouse", "Labs"] for tail(words)`, () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});

// const assertEqual = require("../assertEqual");

// // Test Case: Check the original array
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
