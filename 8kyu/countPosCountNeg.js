function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  } else {
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    const countOfPos = input.filter((e) => e > 0).length;
    let negArr = input.filter((e) => e < 1).reduce(reducer);
    return [countOfPos, negArr];
  }
}
//https://www.codewars.com/kata/576bb71bbbcf0951d5000044
