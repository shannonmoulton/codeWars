function stringy(size) {
    let string = '10'
    if (size % 2 === 0) {
        return string.repeat(size / 2)
    } else {
        return string.repeat(size / 2) + '1'
    }
}

//https://www.codewars.com/kata/563b74ddd19a3ad462000054