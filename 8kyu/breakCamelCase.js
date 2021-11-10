function solution(string) {
    let name = string.split('').map(letter => letter === letter.toUpperCase() ? ' '+letter : letter).join('')
    return name
}
//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

