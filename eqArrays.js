// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(false, false);
assertEqual(false, true);
console.log("=========")

// FUNCTION THAT TAKES TWO ARRAYS AND RETURN TRUE OR FALSE:
const eqArrays = (arrayOne, arrayTwo) => {
  const isEqual = JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
  console.log(isEqual);
  return isEqual;
};


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
