function magNumber(info) {
    let weapon = info[0]
    let streets = info[1]
    let bullets = 0
    switch (weapon) {
        case "PT92": bullets = Math.ceil((streets * 3) / 17);
            break;
        case "M4A1": bullets = Math.ceil((streets * 3) / 30);
            break;
        case "M16A2": bullets = Math.ceil((streets * 3) / 30);
            break;
        case "PSG1": bullets = Math.ceil((streets * 3) / 5);
    }
    return bullets
}


//https://www.codewars.com/kata/5ab52526379d20736b00000e