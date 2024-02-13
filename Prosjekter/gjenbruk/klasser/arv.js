class Hund {
    constructor(navn) {
        this.navn = navn
    }

    bjeff() {
        console.log(`Voff voff! Mitt navn er ${this.navn}.`)
    }
}

class SmartHund extends Hund {
    bark() {
        console.log(`Woof woof! My name is ${this.navn}.`)
    }
}

class AussieHund extends Hund {
    constructor(navn) {
        super(navn)
        this.nasjonalitet = "Australia"
    }

    bjeff() {
        console.log(`Woof woof, mate! Moi naime is ${this.navn} and oi'm from ${this.nasjonalitet}.`)
    }
}

let hund = new Hund("Pys")
let hund2 = new SmartHund("Rex")
let hund3 = new AussieHund("Ralph")

hund3.bjeff()