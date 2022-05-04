const eqArrays = (arrayOne, arrayTwo) => {
  const isEqual = JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
  return isEqual;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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




// TEST CODE
assertArraysEqual(without(["knife", "fork"], ["knife"]), ["knife"]); 
assertArraysEqual(without(["knife", "fork"], ["knife"]), ["fork"]);

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


// The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


// array.prototype.includes(): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

