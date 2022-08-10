function all(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if (!fun(arr[i])) {
            return false
        }
    }
    return true
}

//https://www.codewars.com/kata/54598d1fcbae2ae05200112c