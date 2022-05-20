function capitalize(s) {
    let firstWord = s.split('')
    let secondWord = s.split('')
    for (let i = 0; i < firstWord.length; i = i + 2) {
        firstWord[i] = firstWord[i].toUpperCase()
    }
    for (let i = 1; i < secondWord.length; i = i + 2) {
        secondWord[i] = secondWord[i].toUpperCase()
    }
    return [firstWord.join(''), secondWord.join('')]
};

//https://www.codewars.com/kata/59cfc000aeb2844d16000075