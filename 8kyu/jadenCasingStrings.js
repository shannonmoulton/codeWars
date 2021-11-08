String.prototype.toJadenCase = function () {
  const str = this
  let arr = str.split(' ')
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ')
};
//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript