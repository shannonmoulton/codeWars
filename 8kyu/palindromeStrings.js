function isPalindrome(line) {
    line = line.toString()
    return line === line.split('').reverse().join('')
}
//https://www.codewars.com/kata/57a5015d72292ddeb8000b31