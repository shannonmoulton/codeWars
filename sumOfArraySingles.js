function repeats(arr){
return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,c) => a + c)
}
//https://www.codewars.com/kata/59f11118a5e129e591000134