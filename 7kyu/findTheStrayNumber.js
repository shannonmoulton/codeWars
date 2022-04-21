function stray(numbers) {
    let arr = Array.from(numbers)
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            return arr[i]
        }
    }
}
//https://www.codewars.com/kata/57f609022f4d534f05000024