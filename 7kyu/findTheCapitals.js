var capitals = function (word) {
    word = word.split('')
    let index = word.map((letter, i) => {
        if (letter === letter.toUpperCase()) {
            return i
        }
    })
    return index.filter(num => num >= 0)
};
//https://www.codewars.com/kata/539ee3b6757843632d00026b