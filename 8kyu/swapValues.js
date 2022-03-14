function swapValues(arr) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return [arr[0], arr[1]]
}
//https://www.codewars.com/kata/5388f0e00b24c5635e000fc6