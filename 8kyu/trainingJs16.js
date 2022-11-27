function cutIt(arr) {
    let shortest = Math.min.apply(Math, arr.map(string => string.length))
    return arr.map(string => string.slice(0, shortest))
}

//https://www.codewars.com/kata/57274562c8dcebe77e001012