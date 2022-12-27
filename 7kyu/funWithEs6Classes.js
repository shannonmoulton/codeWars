class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    get surfaceArea() {
        return (2 * this.length * this.width) + (2 * this.length * this.height) + (2 * this.height * this.width)
    }
    get volume() {
        return this.width * this.height * this.length
    }
}
class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}
//https://www.codewars.com/kata/56fbdda707cff41b68000de2