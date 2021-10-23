function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((a, b) => a + b);
  }
}
//https://www.codewars.com/kata/53dc54212259ed3d4f00071c
