const cannonsReady = (gunners) => {
    if (Object.values(gunners).includes('nay')) {
        return 'Shiver me timbers!'
    } else {
        return 'Fire!'
    }
}
//https://www.codewars.com/kata/5748a883eb737cab000022a6