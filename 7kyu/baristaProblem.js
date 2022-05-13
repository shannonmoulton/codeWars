function barista(coffees) {
    if (coffees.length === 0) {
        return 0
    }
    coffees.sort((a, b) => a - b)
    let wait = coffees[0]
    let arr = [coffees[0]]
    for (let i = 1; i < coffees.length; i++) {
        arr.push(wait = wait + 2 + coffees[i])
    }
    return arr.reduce((p, c) => p + c)
}
//https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e