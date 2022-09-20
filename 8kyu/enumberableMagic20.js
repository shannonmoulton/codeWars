function eachCons(array, n) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        let subset = [];
        for (let j = 0; j < n; j++) {
            let index = i + j;
            if (index >= array.length) return results;
            subset.push(array[index]);
        }
        results.push(subset);
    }
    return results;
}

//https://www.codewars.com/kata/545af3d185166a3dec001190