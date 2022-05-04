const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const countLetters = (string) => {
  let output = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (!output[letter]) {
        output[letter] = 1;
      } else {
        output[letter] += 1;
      }
    }
  }
  return output;
};


console.log(countLetters("My name is Rafael"));

// How are we supposed to use assertEqual in this exercise?
