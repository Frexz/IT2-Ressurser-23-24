class Figur {
    constructor(farge) {
        this.farge = farge
    }

    areal() {}
}

class Rektangel extends Figur {
    constructor(farge, l, b) {
        super(farge)
        this.lengde = l
        this.bredde = b
    }

    areal() {
        return this.lengde*this.bredde
    }
}

class Prisme extends Rektangel {
    constructor(farge, l, b, h) {
        super(farge, l, b)
        this.høyde = h
    }

    volum() {
        return this.areal() * this.høyde
    }
}

class Pyramide extends Prisme {
    constructor(farge, l, b, h) {
        super(farge, l, b, h)
    }

    volum() {
        return super.volum() / 3
    }
}

class Trekant extends Figur {
    constructor(farge, g, h) {
        super(farge)
        this.grunnlinje = g 
        this.høyde = h
    }

    areal() {
        return this.grunnlinje*this.høyde / 2
    }
}

class Sirkel extends Figur {
    constructor(farge, r) {
        super(farge)
        this.radius = r
    }

    areal() {
        return Math.PI*this.radius**2
    }
}

class Sylinder extends Sirkel {
    constructor(farge, r, h) {
        super(farge, r)
        this.høyde = h
    }

    volum() {
        return this.areal() * this.høyde
    }
}

class Kjegle extends Sylinder {
    constructor(farge, r, h) {
        super(farge, r, h)
    }

    volum() {
        return super.volum() / 3
    }
}


let rektangel = new Rektangel("magenta", 3, 6)
let prisme = new Prisme("yellow", 3, 6, 9)
let pyramide = new Pyramide("red", 3, 6, 9)

console.log(`Forventer 18. Fikk: ${rektangel.areal()}`) // Forventer 18
console.log(prisme.volum()) // Forventer 162
console.log(pyramide.volum()) // Forventer 54