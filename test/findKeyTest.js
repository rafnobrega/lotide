const assert = require("chai").assert;
const findKey = require("../findKey");


describe("#findKey", () => {

  const firstTest = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 4 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  };

  const secondTest = {
    "Butters": { cuteness: 10 },
    "Precious": { cuteness: 9 },
    "Boomer": { cuteness: 8 },
    "Ollie": { cuteness: 9 },
    "Milu": { cuteness: 7 },
    "Toddy": { cuteness: 7 }
  };

  it(`shoudl return noma when "(x) => x.starts === 2"`, () => {
    assert.strictEqual(findKey(firstTest, x => x.stars === 2), "noma");
  });

  it(`shoudl return Milu when "(x) => x.cuteness === 7`, () => {
    assert.strictEqual(findKey(secondTest, x => x.cuteness === 7), "Milu");
  });
  

});

  // (x) => x.cuteness === 7



// findKey(
//   {
//     Blue Hill: { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 4 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ); // => "noma"
// // could be x["noma"] if I knew the key was called "noma"

// assertEqual(
//   findKey(
//     {
//       Butters: { cuteness: 10 },
//       Precious: { cuteness: 9 },
//       Boomer: { cuteness: 8 },
//       Ollie: { cuteness: 9 },
//       Milu: { cuteness: 7 },
//       Toddy: { cuteness: 7 },
//     },
//     (x) => x.cuteness === 7
//   ),
//   "Milu"
// ); // => "Milu"
