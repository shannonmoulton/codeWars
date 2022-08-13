class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (this.lives < 1) throw 'Error'
        return this.number == n || !(this.lives--);
    }
}

//https://www.codewars.com/kata/568018a64f35f0c613000054