function shortcut(string) {
    return string.split('').filter(c => c != 'a' && c != 'e' && c != 'i' && c != 'o' && c != 'u').join('')
}
//https://www.codewars.com/kata/5547929140907378f9000039