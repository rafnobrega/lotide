// // FUNCTION IMPLEMENTATION head
// const head = (array) => {
//   if (!array.length) {
//     return;
//   } 
//     return array[0];
  
// };

// // FUNCTION IMPLEMENTATION head
const head = (array) => (!array.length) ? undefined : array[0];

// FUNCTION IMPLEMENTATION assertEqual
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE FOR assertEqual
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(false, false);
// assertEqual(false, true);

// TEST CODE FOR assertEqual + head
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
