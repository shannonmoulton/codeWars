function evenNumbers(array, number) {
    return array.filter(number => number % 2 == 0).slice(-number)
}
//https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c