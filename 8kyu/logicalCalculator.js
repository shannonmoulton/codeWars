function logicalCalc(array, op) {
    return array.reduce((a, b) => {
        return op === 'AND' ? a && b
            : op === 'OR' ? a || b
                : a !== b
    })
}

//https://www.codewars.com/kata/57096af70dad013aa200007b