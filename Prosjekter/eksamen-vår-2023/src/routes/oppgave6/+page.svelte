<script>
    let poengsum
    let melding = ""

    $: {
        if (poengsum >= 0 && poengsum < 50) {
        melding = "Ikke bestått"
        } else if (poengsum >= 50 && poengsum <= 69) {
            melding = "Bestått"
        } else if (poengsum >= 70 && poengsum <= 89) {
            melding = "Godt bestått"
        } else if (poengsum >= 90 && poengsum <= 100) {
            melding = "Meget godt bestått"
        } else {
            melding = "Ikke gyldig poengsum!"
        }
    }
    
</script>

<a href="/">Tilbake</a>

<p>Skriv inn poengsummen din:</p>
<input type="number" bind:value={poengsum}>
<p>{melding}</p>

<style>
    
</style>