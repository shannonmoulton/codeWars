function maskify(cc) {
    let masked = '#'
    if (cc.length > 4) {
        return masked.repeat(cc.length - 4) + cc.slice(cc.length - 4)
    } else {
        return cc
    }
}
//https://www.codewars.com/kata/5412509bd436bd33920011bc