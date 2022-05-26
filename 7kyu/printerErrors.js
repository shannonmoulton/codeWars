function printerError(s) {
    const noErrors = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
    const arr = s.split('')
    let error = 0

    arr.map((letter) => noErrors.includes(letter) === false ? error += 1 : error += 0)

    return `${error}/${arr.length}`
}
//https://www.codewars.com/kata/56541980fa08ab47a0000040