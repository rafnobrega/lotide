const findKeyByValue = (object, value) => {
  for (const genre in object) {
    if (value === object[genre]) {
      return genre;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;