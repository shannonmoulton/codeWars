function firstToLast(str, c) {
    return !str.includes(c) ? -1 : str.lastIndexOf(c) - str.indexOf(c)
}
//https://www.codewars.com/kata/57277a31e5e51450a4000010
