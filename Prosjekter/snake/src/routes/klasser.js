export class Spillbrett {
    constructor(bredde, høyde) {
        this.bredde = bredde
        this.høyde = høyde
        this.objekter = []
        this.erOver = false
    }

    leggTil(obj) {
        this.objekter.push(obj)
    }

    fjern(obj) {
        this.objekter = this.objekter.filter(element => element != obj)
    }
}

export class Eple {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

export class Slange {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = 0
        this.vy = 0
        this.kropp = []
    }

    move(rutelengde) {
        this.x += this.vx * rutelengde
        this.y += this.vy * rutelengde
    }
}