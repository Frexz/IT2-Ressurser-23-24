export class Produkt {
    // Dette er en statisk variabel. Det betyr at i stedet for å tilhøre et bestemt objekt som man oppretter
    // så tilhører denne variabelen alle objekter av denne klassen. Dette er ideelt for å lage ting som 
    // id-systemer for da husker klassen hvilke id-er som allerede eksisterer.
    static id = 0

    constructor(navn, pris) {
        this.id = Produkt.id // Slik referer man til en statisk variabel (klassevariabel)
        this.navn = navn
        this.pris = pris
        this.antall = 0
        this.img = `/img/${this.navn.toLowerCase()}.jpg`

        // Klassevariabelen økes med én for selve klassen og ikke det spesifikke objektet.
        // Det betyr at hvis id var 0 blir id lik 1 neste til neste objekt som opprettes.
        Produkt.id++
    }
}

export class Beholdning {

    constructor() {
        this.beholdning = []
    }

    // Enkel legg til metode
    leggTil(produkt) {
        this.beholdning.push(produkt)
    }

    // Summerer prisen til alle produktene i beholdningen
    summerAlleProdukter() {
        let sum = 0
        
        this.beholdning.forEach(produkt => {
            sum = sum + (produkt.pris * produkt.antall)
        })

        return sum
    }

    // Enkel hent-metode
    hentBeholdning() {
        return this.beholdning
    }
} 