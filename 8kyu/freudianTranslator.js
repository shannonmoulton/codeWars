function toFreud(string) {
    return string.length > 0 ? string.split(' ').map(word => word.replace(word, 'sex')).join(' ') : string

}

//https://www.codewars.com/kata/5713bc89c82eff33c60009f7