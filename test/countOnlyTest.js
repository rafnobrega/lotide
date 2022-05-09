const assert = require("chai").assert;
const countOnly = require("../countOnly");
// const assertEqual = require("../assertEqual");

describe("#countOnly", () => {
  
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];

  const result1 = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  });

  it(`returns 2 when searching for the first name "Fang"`, () => {
    assert.strictEqual(result1["Fang"], 2);

  });

  it(`returns undefined when searching for the first name "Karima"`, () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
});



// console.log("result: ", result1);

// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
