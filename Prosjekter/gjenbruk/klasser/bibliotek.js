class Hylle {
    constructor() {
        this.antallPlasser = 3
        this.bøker = []
    }

    settInnBok(bok) {
        if (this.bøker.length < this.antallPlasser) {
            this.bøker.push(bok)
        } else {
            console.log("Det er ikke plass i bokhylla.")
        }
    }

    erIHylle(bok) {
        return this.bøker.includes(bok)
    }
}

class Bok {
    constructor(tittel, forfatter, år, sjanger) {
        this.tittel = tittel
        this.forfatter = forfatter
        this.utgivelsesår = år
        this.sjanger = sjanger
    }
}

class Forfatter {
    constructor(fornavn, etternavn, år) {
        this.fornavn = fornavn
        this.etternavn = etternavn
        this.fødselsår = år
    }
}

let hylle = new Hylle()
let tolkien = new Forfatter("John R. R.", "Tolkien", 1892)
let bok1 = new Bok("Ringens Brorskap", tolkien, 1954, "Fantasy")
let bok2 = new Bok("To Tårn", tolkien, 1954, "Fantasy")
let bok3 = new Bok("Atter En Konge", tolkien, 1955, "Fantasy")
let bok4 = new Bok("Hobitten", tolkien, 1937, "Fantasy")

hylle.settInnBok(bok1)
hylle.settInnBok(bok2)
hylle.settInnBok(bok3)
console.log(hylle.bøker.length)

hylle.settInnBok(bok4)
console.log(hylle.bøker.length)