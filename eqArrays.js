const assertEqual = require("./assertEqual");

// FUNCTION THAT TAKES TWO ARRAYS AND RETURN TRUE OR FALSE:
const eqArrays = (arrayOne, arrayTwo) => {
  const isEqual = JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
  // console.log(isEqual);
  return isEqual;
};
module.exports = eqArrays;

// MENTOR'S SOLUTION:
// const eqArrays = function(arr1, arr2) {
// // changing eqArrays loops
// if (arr1.length !== arr2.length) {
//   return false;
// }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// ANOTHER MENTOR'S SOLUTION:
// const eqArrays = function (arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   return true;
// };
