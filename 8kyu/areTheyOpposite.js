function isOpposite(s1, s2) {
    return !!s1 && s2 == s1[`split`]('')[`map`](element => element[`${element < 'a' ? 'toLowerCase' : 'toUpperCase'}`]()).join('')
}

//https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7