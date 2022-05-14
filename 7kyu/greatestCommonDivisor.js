function mygcd(x, y) {
    return y == 0 ? x : mygcd(y, x % y)
}
//https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd