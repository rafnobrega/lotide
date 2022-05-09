const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");



describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};


  it(`should return drama when looking for The Wire show`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")});


  it(`should return undefined when looking for That '70s Show series`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)});
});

  

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
