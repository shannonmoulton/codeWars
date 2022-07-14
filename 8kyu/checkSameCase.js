function sameCase(a, b) {
    return !a.match(/[A-Za-z]/g) || !b.match(/[A-Za-z]/g) ? -1 : a.match(/[A-Z]/g) && b.match(/[A-Z]/g) || a.match(/[a-z]/g) && b.match(/[a-z]/g) ? 1 : 0
}

//https://www.codewars.com/kata/5dd462a573ee6d0014ce715b