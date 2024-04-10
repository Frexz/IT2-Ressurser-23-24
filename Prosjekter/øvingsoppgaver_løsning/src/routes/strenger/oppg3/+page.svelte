<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";

    // Liste med vokaler definert på forhånd. Denne listen vil bare gjelde strenger på norsk.
    const vokaler = ["a", "e", "i", "o", "u", "y", "æ", "ø", "å"]
    
    let streng = "Hallo, Fredrik!"
    let antallVokaler

    function tellVokaler(streng) {
        antallVokaler = 0
        
        // Gjør strengen til små bokstaver slik at man ikke gjør forskjell på små og 
        // store bokstaver
        streng = streng.toLowerCase()

        // Løkke som sjekker hvert element i strengen (hvert symbol/bokstav). Hvis symbolet
        // er i listen over vokaler økes tellevariabelen med 1.
        for (const char of streng) {
            if (vokaler.includes(char)) {
                antallVokaler++
            }
        }
    }

    $: {
        tellVokaler(streng)
    }
</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 3</h1>
        <p>
            Skriv et program som tar imot en streng fra brukeren og som teller antall vokaler som er i strengen. 
            F.eks vil strengen «Hallo, Fredrik!» inneholde 4 vokaler.
        </p>
    </div>

    <div class="oppgave" slot="oppgave">
        <h2>Skriv inn en setning</h2>
        <input type="text" bind:value={streng} style="margin-bottom: 50px;">

        <p>Det er {antallVokaler} vokaler i "{streng}"</p>
    </div>
</OppgaveLayout>