const assertEqual = require('./assertEqual');


// // FUNCTION IMPLEMENTATION head
// const head = (array) => {
//   if (!array.length) {
//     return;
//   } 
//     return array[0];
  
// };

// // FUNCTION IMPLEMENTATION
const head = (array) => (!array.length) ? undefined : array[0];

module.exports = head;