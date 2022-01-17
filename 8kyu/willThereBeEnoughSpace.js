function enough(cap, on, wait) {
    return cap - on >= wait ? 0
        : wait - (cap - on)
}
//https://www.codewars.com/kata/5875b200d520904a04000003