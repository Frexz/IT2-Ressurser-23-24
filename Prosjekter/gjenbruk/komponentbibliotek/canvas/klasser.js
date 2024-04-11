export class Spillbrett {
    constructor(bredde, høyde) {
        this.bredde = bredde
        this.høyde = høyde
        this.objekter = []
    }

    leggTil(obj) {
        this.objekter.push(obj)
    }

    fjern(obj) {
        this.objekter = this.objekter.filter(element => element != obj)
    }
}