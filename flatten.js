// const eqArrays = (arrayOne, arrayTwo) => {
//   const isEqual = JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
//   return isEqual;
// };



// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const flatten = (array) => {
  let newArray = []; // define an empty array first
  for (const firstItem of array) {
    if (Array.isArray(firstItem)) { // if it's true ([3, 4] and [6])
      for (const innerArrayItem of firstItem) { // loop inside the nested array ([3, 4] and [6])
        newArray.push(innerArrayItem);
      }
    } else { // if false (1, 2, 5)
      newArray.push(firstItem);
    }
  }
  return newArray;
};

module.exports = flatten;


