String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
}
//https://www.codewars.com/kata/56efc695740d30f963000557
