export class Spillbrett {
    constructor(bredde, høyde, rutelengde) {
        this.bredde = bredde
        this.høyde = høyde
        this.rutelengde = rutelengde
        this.objekter = []
        this.figurer = this.nyeFigurer()
        this.current = this.figurer["firkant"]
    }

    leggTil(obj) {
        this.objekter.push(obj)
    }

    fjern(obj) {
        this.objekter = this.objekter.filter(element => element != obj)
    }

    nyeFigurer() {
        this.figurer = {
            "firkant": new Firkant(Math.floor((this.bredde/2)) - this.rutelengde, 0, this.rutelengde)
        }
    }
}

export class Figur {
    constructor(x, y, lengde) {
        this.lengde = lengde
        this.x = x
        this.y = y
        this.kropp = []
    }
}

export class Firkant extends Figur {
    constructor(x, y, lengde) {
        super(x, y, lengde)
        this.farge = 'yellow'
        this.byggKropp()
    }

    byggKropp() {

    }
}