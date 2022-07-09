function addLength(str) {
    let arr = str.split(' ')
    let result = []

    arr.forEach(element => result.push(`${element} ${element.length}`))

    return result
}

//https://www.codewars.com/kata/559d2284b5bb6799e9000047