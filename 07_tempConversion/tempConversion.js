const ftoc = function(f) {
  let c = (f - 32) * (5/9);
  return roundToOneDecimal(c);
};

const ctof = function(c) {
  let f = c * (9/5) + 32;
  return roundToOneDecimal(f);
};

function roundToOneDecimal(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
