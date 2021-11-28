function index(array, n) {
    console.log(array, n)
    if (array[n]) {
        return Math.pow(array[n], n)
    } else {
        return -1
    }
}
//https://www.codewars.com/kata/57d814e4950d8489720008db