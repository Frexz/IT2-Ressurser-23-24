class Bil {
    constructor(merke, verdi) {
        this.merke = merke
        this.verdi = verdi
    }

    regnUtPris() {
        return this.verdi * 1.25
    }

    hentInfo() {
        return `Merke: ${this.merke} \nVerdi: ${this.verdi} kr`
    }
}

class Elbil extends Bil {
    constructor(merke, verdi, rekkevidde) {
        super(merke, verdi)
        this.rekkevidde = rekkevidde
        this.batteri = 80
    }

    regnUtPris() {
        return this.verdi
    }

    hentInfo() {
        return super.hentInfo() + `\nRekkevidde: ${this.rekkevidde} km`
    }
}

class Garasje {
    constructor() {
        this.biler = []
    }

    parkerBil(bil) {
        this.biler.push(bil)
    }

    hentBil(bil) {
        for (const b of this.biler) {
            if (b == bil) {
                return b
            }
        }
    }

    ladBil(bil) {
        if (bil instanceof Elbil) {
            bil.batteri = 100
        } else {
            console.log('Du kan ikke lade denne bilen.')
        }
    }
}

let bil = new Bil('BMW', 400000)
let elbil = new Elbil('Ford', 600000, 450)
let garasje = new Garasje()

console.log(elbil.hentInfo())