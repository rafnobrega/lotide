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
  return outputArr;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

test3 = [6, 2, 40, 4, 5, 6]
assertArraysEqual(takeUntil(test3, (x) => x % 2 !== 0), [6, 2, 40, 4])

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

