class Cube {
    constructor(side = 0) {
        this.side = Math.abs(side);
    }
    getSide() {
        return this.side;
    }
    setSide(n) {
        this.side = Math.abs(n)
    }
}

//https://www.codewars.com/kata/55c0ac142326fdf18d0000af