function strCount(str, letter) {
    regex = new RegExp(letter, 'g')
    if (str.match(regex)) {
        return str.match(regex).length
    } else {
        return 0
    }
}
//or

function strCount(str, letter) {
    return str.split('').filter(e => e == letter).length
}
//https://www.codewars.com/kata/5865918c6b569962950002a1