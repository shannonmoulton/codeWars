const reverseSeq = (n) => {
  return [...new Array(n + 1).keys()].slice(1).reverse();
};
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d
