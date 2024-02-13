class Sang {
    constructor(tittel, artist) {
        this.tittel = tittel
        this.artist = artist
    }

    toString() {
        return `${this.tittel} - ${this.artist}`
    }
}

class Spilleliste {
    constructor() {
        this.liste = []
    }

    leggTilSang(sang) {
        this.liste.push(sang)
    }

    fjernSang(sang) {
        this.liste = this.liste.filter((s) => s != sang)
        //this.liste.splice(this.liste.indexOf(sang), 1)
    }
}

let sang = new Sang("Nothing Else Matters", "Metallica")
let spilleliste = new Spilleliste()
console.log(spilleliste)
spilleliste.leggTilSang(sang)
console.log(spilleliste)
spilleliste.fjernSang(sang)
console.log(spilleliste)