function XO(str) {
    str = str.toLowerCase()
    let xCount = 0
    let oCount = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            xCount++
        } else if (str[i] === 'o') {
            oCount++
        }

    }
    return xCount === oCount || xCount === 0 && oCount === 0

}
//https://www.codewars.com/kata/55908aad6620c066bc00002a