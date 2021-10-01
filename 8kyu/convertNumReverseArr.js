function digitize(n) {
    const arr = (n.toString().split('').reverse())
    return(arr).map(element => Number(element))
 }
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051