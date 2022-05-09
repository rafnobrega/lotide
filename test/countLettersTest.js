const assert = require("chai").assert;
const countLetters = require("../countLetters");


describe("#countLetters", () => {

  const string1 = "rafael";

  it(`returns the count of each letter in the string "My name is Rafael"`, () => {
    assert.deepEqual(countLetters(string1), {r: 1, a: 2, f: 1, e: 1, l: 1 });
  });

});