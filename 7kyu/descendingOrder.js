function descendingOrder(n) {
    return Number(Array.from(String(n)).sort((a, b) => b - a).join(''))
}
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155