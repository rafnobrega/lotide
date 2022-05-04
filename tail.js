// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(false, false);
// assertEqual(false, true);

// FUNCTION IMPLEMENTATION tail
const tail = function (array) {
  let newArray = array;
  newArray = newArray.slice(1);
  console.log(newArray);
  return newArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
