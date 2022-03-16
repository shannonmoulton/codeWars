function findMultiples(integer, limit) {
    let array = []
    for (let i = 1; i <= limit; i++) {
        if (integer * i <= limit) {
            array.push(integer * i);
        }
    }
    return array
}
//https://www.codewars.com/kata/58ca658cc0d6401f2700045f