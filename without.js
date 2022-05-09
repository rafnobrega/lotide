// const eqArrays = (arrayOne, arrayTwo) => {
//   const isEqual = JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
//   return isEqual;
// };

// const assertArraysEqual = (actual, expected) => {
//   if (eqArrays(actual, expected)) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const without = (source, itemsToRemove) => {
  let newArray = [];

  // For loop -> inside the for loop check if each element is not existed in array itemsToRemove then push that element to result array
  for (let i = 0; i < source.length; i++) {
    let isIncluded = itemsToRemove.includes(source[i]);
    if (!isIncluded) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

module.exports = without;


