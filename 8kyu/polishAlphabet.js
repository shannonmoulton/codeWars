function correctPolishLetters(string) {
    let result = ''
    let diacritics = {
        ą: 'a',
        ć: 'c',
        ę: 'e',
        ł: 'l',
        ń: 'n',
        ó: 'o',
        ś: 's',
        ź: 'z',
        ż: 'z'
    };

    for (let i = 0; i < string.length; i++) {
        if (Object.keys(diacritics).includes(string[i])) {
            result += diacritics[string[i]]
        } else {
            result += string[i]
        }
    }
    return result
}

//https://www.codewars.com/kata/57ab2d6072292dbf7c000039