const repeatString = function(str, num) {
  if (typeof num != 'number' || num < 0) return 'ERROR';
  return str.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
