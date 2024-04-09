export class Spillbrett {
    constructor(bredde, høyde) {
        this.b = bredde
        this.h = høyde
        this.objekter = []
        this.fri = 0.15 * this.b
    }

    leggTil(obj) {
        this.objekter.push(obj)
    }

    fjern(obj) {
        this.objekter = this.objekter.filter(element => {return element != obj})
    }
}

export class SpillObjekt {
    constructor() {
        this.x = 0
        this.y = 0
        this.side = 25
    }

    plassering(x, y) {
        this.x = x
        this.y = y
    }

    sjekkKollisjonMedKant(spill) {
        return (
            this.y < 0 ||
            this.y + this.side > spill.h ||
            this.x < 0 ||
            this.x + this.side > spill.b
        )
    }
}

export class Menneske extends SpillObjekt {
    constructor() {
        super()
        this.vx = 0
        this.vy = 0
        this.fart = 4
        this.poeng = 0
        this.bærerSau = false
    }

    beveg() {
        this.x += this.fart * this.vx
        this.y += this.fart * this.vy
    }
}