function DNAStrand(dna) {
    let result = ''
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            result += 'T'
        }
        if (dna[i] === 'T') {
            result += 'A'
        }
        if (dna[i] === 'C') {
            result += 'G'
        }
        if (dna[i] === 'G') {
            result += 'C'
        }
    }
    return result
}
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038