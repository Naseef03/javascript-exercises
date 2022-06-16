const sumAll = function(startNum, endNum) {
  // Check for negative values
  if (typeof startNum != 'number' || typeof endNum != 'number' || 
      startNum < 0 || endNum < 0) return 'ERROR';

  // exchange startNum and endNum according to values
  if (startNum > endNum) {
    let temp = startNum;
    startNum = endNum;
    endNum = temp;
  }
  
  
  let sum = 0;
  for (let num = startNum; num <= endNum; num++) {
    sum += num;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
