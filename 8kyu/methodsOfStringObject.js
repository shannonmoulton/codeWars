function splitAndMerge(string, separator) {
    return string.split(' ').map(element => element.split('').join(separator)).join(' ')
}

//https://www.codewars.com/kata/57280481e8118511f7000ffa