class Block {
    constructor(data) {
        this.data = data
    }
    getWidth() {
        return this.data[0]

    }
    getLength() {
        return this.data[1]
    }
    getHeight() {
        return this.data[2]
    }
    getVolume() {
        return this.data[0] * this.data[1] * this.data[2]
    }
    getSurfaceArea() {
        return (2 * this.data[1] * this.data[2]) + (2 * this.data[1] * this.data[0]) + (2 * this.data[0] * this.data[2])
    }
}
//https://www.codewars.com/kata/55b75fcf67e558d3750000a3