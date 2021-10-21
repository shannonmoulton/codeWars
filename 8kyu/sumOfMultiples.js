function sumMul(n, m) {
  let finalNumber = 0;
  if (n <= 0 || m <= 0) {
    return "INVALID";
  }
  for (let i = n; i < m; i += n) {
    finalNumber += i;
  }
  return finalNumber;
}
//https://www.codewars.com/kata/57241e0f440cd279b5000829
