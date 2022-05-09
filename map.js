/* Our map function will take in two arguments:
An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/


// // FUNCTION THAT TAKES TWO ARRAYS AND RETURN TRUE OR FALSE:
// const eqArrays = (arrayOne, arrayTwo) => {
//   const isEqual = JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
//   return isEqual;
// };

// const assertArraysEqual = function (actual, expected) {
//   if (eqArrays(actual, expected)) { 
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// ___________________________________________________________________
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;