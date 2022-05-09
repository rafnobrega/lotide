

const middle = (array) => {
  let middleElement = [];
  if (array.length <= 2) {
    // IF ARRAY HAS ONLY 2 ELEMENTS OR LESS
    return middleElement; // RETURN AN EMPTY ARRAY
  }
  if (array.length % 2 === 0) {
    //IF TRUE, EVEN
    middleElement.push(array[array.length / 2 - 1]);
    middleElement.push(array[array.length / 2]);
    return middleElement;
  } else {
    // IF FALSE, ODD
    middleElement.push(array[Math.floor(array.length / 2)]);
    return middleElement;
  }
};

module.exports = middle;