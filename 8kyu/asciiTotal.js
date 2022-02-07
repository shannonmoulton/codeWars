function uniTotal(string) {
    let result = []
    for (let i = 0; i < string.length; i++) {
        result.push(string.charCodeAt(i))
    }
    return result.reduce((a, b) => a + b, 0)
}
//https://www.codewars.com/kata/572b6b2772a38bc1e700007a