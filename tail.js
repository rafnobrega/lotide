const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const tail = function (array) {
  let newArray = array;
  newArray = newArray.slice(1);
  // console.log(newArray);
  return newArray;
};



module.exports = tail;