function lowercaseCount(str) {
    const regex = /[a-z]/g
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(regex)) {
            count++
        }
    }
    return count
}

//https://www.codewars.com/kata/56a946cd7bd95ccab2000055