export function reverser(streng) {
    // Nullstiller variabelen
    let baklengsStreng = ""

    // Her itererer vi over strengen baklengs og bygger opp strengen som er resultatet vårt bokstav for bokstav
    // +-operetoren for strenger betyr "konkatenering" og det den gjør er at strenger "sveises" sammen.
    for (let i = streng.length - 1; i >= 0; i--) {
        baklengsStreng += streng.charAt(i)
    }

    return baklengsStreng
}