function getSumOfDigits(integer) {
    var sum = 0;
    var digits = integer.toString();
    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }
    return sum;
}
//https://www.codewars.com/kata/563d59dd8e47a5ed220000ba

