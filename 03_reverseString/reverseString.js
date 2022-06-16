const reverseString = function(str) {
  const strList = str.split('');

  let reversedStr = '';
  for (let i = 0; i < str.length; i++) {
    reversedStr += strList.pop();
  }

  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
