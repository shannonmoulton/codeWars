var countBits = function (integer) {
  if (integer === 0) {
    return 0;
  } else {
    return integer.toString(2).match(/1/g).length;
  }
};
//https://www.codewars.com/kata/526571aae218b8ee490006f4
