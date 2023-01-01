Array.prototype.sort = function () {
    for (let i = 0; i < this.length; i++) {
        let current = this[i]
        let j = i - 1;

        while ((j > -1) && (current < this[j])) {
            this[j + 1] = this[j];
            j--;
        }
        this[j + 1] = current;
    }
    return this;
}

//https://www.codewars.com/kata/56bac4c34537cf1e270005a1