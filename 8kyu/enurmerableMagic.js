function any(arr, fun) {
    let result = false
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            result = true
        }
    }
    return result
}

//https://www.codewars.com/kata/54598e89cbae2ac001001135

