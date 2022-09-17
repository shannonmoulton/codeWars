function evil(n) {
    let ones = n.toString(2).split('').filter(element => element === '1')
    return ones.length % 2 === 0 ? "It's Evil!" : "It's Odious!"
}

//https://www.codewars.com/kata/56fcfad9c7e1fa2472000034