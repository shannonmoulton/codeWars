function find_average(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce((a, b) => a + b) / array.length;
  }
}
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
