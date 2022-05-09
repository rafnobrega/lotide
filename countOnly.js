// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = (allItems, itemsToCount) => {
  let subset = {};
  for (item in itemsToCount) {
    if (itemsToCount[item]) {
      let count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === item) {
          count += 1;
        }
      }
      if (count !== 0) {
        subset[item] = count;
      }
    }
  }
  return subset;
};

module.exports = countOnly;

