function past(h, m, s) {
  let hour = h * 3600000;
  let min = m * 60000;
  let sec = s * 1000;
  let answer = hour + min + sec;
  return answer;
}
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
