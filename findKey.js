const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      console.log(key);
      return key;
    }
  }
  return undefined;
};

findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 4 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"
// could be x["noma"] if I knew the key was called "noma"

assertEqual(
  findKey(
    {
      Butters: { cuteness: 10 },
      Precious: { cuteness: 9 },
      Boomer: { cuteness: 8 },
      Ollie: { cuteness: 9 },
      Milu: { cuteness: 7 },
      Toddy: { cuteness: 7 },
    },
    (x) => x.cuteness === 7
  ),
  "Milu"
); // => "Milu"

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

// USING A FOR OF LOOP:
// const findKey = function (object, callback) {
//   let keys = Object.keys(object);
//   for (let key of keys) {
//     if (callback(object[key])) {
//       console.log(key);
//       return key;
//     }
//   }
//   return undefined;
// };
