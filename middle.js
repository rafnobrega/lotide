const eqArrays = (arrayOne, arrayTwo) => {
  const isEqual = JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
  return isEqual;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = (array) => {
  let middleElement = [];
  if (array.length <= 2){ // IF ARRAY HAS ONLY 2 ELEMENTS OR LESS
    return middleElement; // RETURN AN EMPTY ARRAY
  }
  if (array.length % 2 === 0) {     //IF TRUE, EVEN
    middleElement.push(array[(array.length / 2) -1]);
    middleElement.push(array[(array.length / 2)]);
    return middleElement;
  } else {     // IF FALSE, ODD
    middleElement.push(array[Math.floor(array.length / 2)]);
    return middleElement;
  }
};

// TEST CODE
console.log(middle([])) // => []
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);