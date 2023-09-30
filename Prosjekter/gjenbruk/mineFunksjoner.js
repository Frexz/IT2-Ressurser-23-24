export function kastTerning() {
    return Math.floor(6*Math.random() + 1)
}

export function tilfeldigTallMellom(min, maks) {
    return Math.floor((maks - min + 1)*Math.random() + min)
}

export function fakultet(n) {
    let produkt = 1

    for (let i = n; i > 0 ; i--) {
        produkt *= i
    }

    return produkt
}

/* Dette er en rekursiv funksjon som gjør det samme som funksjonen over. Rekursive funksjoner
er kjent for å være supervanskelige å skjønne/lage, men svært bra til enkelte oppgaver der en beregning
avhenger av den forrige for eksempel. Dette er absolutt ikke noe dere må kunne, men legger den ved her for
spesielt interesserte. */
export function rekursivFakultet(n) {
    if (n < 1) {
        return 1
    }

    return rekursivFakultet(n - 1) * n
}

export function ordnetUtvalg(n, r) {
    return fakultet(n) / fakultet(n - r)
}

export function gjennomsnittAv(a, b) {
    return (a + b) / 2
}

export function sumArray(mineTall) {
    return mineTall.reduce((sum, tall) => sum + tall)
}

export function lagDNAtråd(n) {
    let baser = ["A", "T", "G", "C"]
    let tråd = ""

    for (let i = 0; i < n; i++) {
        let tilfeldigTall = Math.floor(4*Math.random())
        tråd += baser[tilfeldigTall]
    }

    return tråd
}

export function lagKompDNA(DNA_tråd) {
    let kompTråd = ""

    for (let i = 0; i < DNA_tråd.length; i++) {
        switch (DNA_tråd[i]) {
            case "A":
                kompTråd += "T"
                break;
            case "T":
                kompTråd += "A"
                break;
            case "G":
                kompTråd += "C"
                break;
            case "C":
                kompTråd += "G"
                break;
            default:
                break;
        }
    }

    return kompTråd
}

export function lagmRNA(DNA_tråd) {
    let mRNATråd = ""

    for (let i = 0; i < DNA_tråd.length; i++) {
        if (DNA_tråd[i] == "T") {
            mRNATråd += "U"
        } else {
            mRNATråd += DNA_tråd[i]
        }
    }

    return mRNATråd
}

export function vektor(x1, y1, x2, y2) {
    return [x2 - x1, y2 - y1]
}

export function lengde(vektor) {
    return Math.sqrt(vektor[0]**2 + vektor[1]**2)
}

export function skalarprodukt(vektor1, vektor2) {
    return vektor1[0]*vektor2[0] + vektor1[1]*vektor2[1]
}

export function vinkelenMellom(vektor1, vektor2) {
    return Math.acos(skalarprodukt(vektor1, vektor2)/(lengde(vektor1)*lengde(vektor2)))
}

export function storForbokstav(ord) {
    return ord.charAt(0).toUpperCase() + ord.slice(1)
}

export function lagValutaOversikt() {
    let tabell = []
    tabell.push(
        {"valuta": "EUR", "kurs": 0.087},
        {"valuta": "USD", "kurs": 0.093},
        {"valuta": "GBP", "kurs": 0.087},
        {"valuta": "JPY", "kurs": 13.82},
        {"valuta": "NOK", "kurs": 1}
    )
    return tabell
}

export function veksleFraNOK(beløp, tilValuta) {
    let valutaTabell = lagValutaOversikt()

    for (const rad of valutaTabell) {
        if (rad["valuta"] == tilValuta) {
            return beløp * rad["kurs"]
        }
    }
}

export function veksleFraTil(beløp, fraValuta, tilValuta) {
    let fraValutaData
    let valutaTabell = lagValutaOversikt()

    for (const rad of valutaTabell) {
        if (rad["valuta"] == fraValuta) {
            fraValutaData = rad
        }
    }

    let beløpNOK = beløp / fraValutaData["kurs"]

    return veksleFraNOK(beløpNOK, tilValuta)
}