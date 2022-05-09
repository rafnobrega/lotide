


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



module.exports = countLetters;
