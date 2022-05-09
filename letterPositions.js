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

// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

const letterPositions = (sentence) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // add letters to object(results)
    let key = sentence[i];
    let value = i;
    // check if letter is added / add index to against letter
    if (key in results) {
      value = results[key];
      value.push(i);
      results[key] = value;
    } else {
      // if nothing, create new key
      results[sentence[i]] = [i];
    }
  }
  // console.log(results);
  return results;
};

module.exports = letterPositions;