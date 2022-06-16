const removeFromArray = function(list, ...elementsToRemove) {
  for (const elemToRemove of elementsToRemove) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === elemToRemove) {
        list.splice(i, 1);
        break;
      } 
    }
  }
  return list;
};

// Do not edit below this line
module.exports = removeFromArray;
