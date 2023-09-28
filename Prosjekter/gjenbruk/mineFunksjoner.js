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