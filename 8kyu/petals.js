function howMuchILoveYou(nbPetals) {
    let array = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    return array[(nbPetals - 1) % array.length]
}
//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296