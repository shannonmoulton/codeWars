function squareDigits(num){
    return Number(num.toString().split('').map( element => Math.pow(element, 2)).join(''));
  }
//https://www.codewars.com/kata/546e2562b03326a88e000020