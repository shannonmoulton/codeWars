function howManySmaller(arr, n) {
    return arr.map(element => element.toFixed(2)).filter(number => number < n).length

}

//https://www.codewars.com/kata/57256064856584bc47000611