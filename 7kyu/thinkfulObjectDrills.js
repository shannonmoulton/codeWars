class Quark {
    constructor(color, flavor, baryon_number) {
        this.color = color;
        this.flavor = flavor;
        this.baryon_number = 0.3333333333333333;
    }
    interact(quarkTwo) {
        let quarkOneColor = this.color, quarkTwoColor = quarkTwo.color

        this.color = quarkTwoColor
        quarkTwo.color = quarkOneColor
    }
}

//https://www.codewars.com/kata/5882b052bdeafec15e0000e6