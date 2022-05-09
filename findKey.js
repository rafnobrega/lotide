const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;


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
