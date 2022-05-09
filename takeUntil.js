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

/*
It will take in two parameters as well:

1. The array to work with
2. The callback (which Lodash calls "predicate")

To keep things simple, the callback should only be provided one value: The item in the array.
*/

const takeUntil = function (array, callback) {
  let outputArr = [];
  for(const item of array) {
    if (!(callback(item))) {
    outputArr.push(item);
    } else return outputArr;
  }
  return outputArr; // I don't really need this return here.
};

module.exports = takeUntil;