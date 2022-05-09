

// FUNCTION IMPLEMENTATION
const tail = function (array) {
  let newArray = array;
  newArray = newArray.slice(1);

  return newArray;
};



module.exports = tail;