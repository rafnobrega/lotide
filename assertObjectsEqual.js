const eqArrays = (arrayOne, arrayTwo) => {
  const isEqual = JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
  // console.log(isEqual);
  return isEqual;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  // checking if the number key in each object is the (not) same
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        }
        return false;
      }

      // checking if the values of the keys are (not) the same
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE:
assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" });
assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "3" });
assertObjectsEqual({ a: "3", b: 2 }, { b: 2, a: "3" });
assertObjectsEqual({ a: "3", b: 2, c: [2, 2]}, { b: 2, a: "3", c: [2, 2]});
assertObjectsEqual({ a: "3", b: 2, c: [2, 2]}, { b: 2, a: "3", c: [1, 2]});
