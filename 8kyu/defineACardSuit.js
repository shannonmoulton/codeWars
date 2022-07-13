function defineSuit(card) {
    return card.includes('♣') ? 'clubs'
        : card.includes('♦') ? 'diamonds'
            : card.includes('♥') ? 'hearts'
                : 'spades'
}

//https://www.codewars.com/kata/5a360620f28b82a711000047