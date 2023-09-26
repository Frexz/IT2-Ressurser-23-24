export { kastTerning, tilfeldigTallMellom, fakultet, rekursivFakultet, ordnetUtvalg }

function kastTerning() {
    return Math.floor(6*Math.random() + 1)
}

function tilfeldigTallMellom(min, maks) {
    return Math.floor((maks - min + 1)*Math.random() + min)
}

function fakultet(n) {
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
function rekursivFakultet(n) {
    if (n < 1) {
        return 1
    }

    return rekursivFakultet(n - 1) * n
}

function ordnetUtvalg(n, r) {
    return fakultet(n) / fakultet(n - r)
}