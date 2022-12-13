var countSquares = function (cuts) {
    if (cuts === 0)
        return 1;

    return (6 * cuts * cuts) + 2;
}

// https://www.codewars.com/kata/5763bb0af716cad8fb000580