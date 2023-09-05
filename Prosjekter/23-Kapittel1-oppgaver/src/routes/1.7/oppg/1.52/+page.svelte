<script>
    let vokaler = ["a", "e", "i", "o", "u", "y", "æ", "ø", "å"]
    let tilfeldigTall = Math.floor(10*Math.random())
    let bokstavType
    let ord = ""

    if (tilfeldigTall % 2 == 0) {
        bokstavType = "vokal"
    } else {
        bokstavType = "konsonant"
    }

</script>

<p>Skriv inn et ord som begynner med en {bokstavType}</p>
<input type="text" bind:value={ord}>

{#if ord.length == 0}
    <h2>Venter på ord...</h2>
{:else if vokaler.includes(ord.charAt(0).toLowerCase()) && bokstavType == "vokal"}
    <h2>Bra! &#x1F44D; Ordet begynner med en vokal.</h2>
{:else if vokaler.includes(ord.charAt(0).toLowerCase()) && bokstavType == "konsonant"}
    <h2>Nei! &#x1F44E; Prøv igjen.</h2>
{:else if !vokaler.includes(ord.charAt(0).toLowerCase()) && bokstavType == "konsonant"}
    <h2>Bra! &#x1F44D; Ordet begynner med en konsonant.</h2>
{:else if !vokaler.includes(ord.charAt(0).toLowerCase()) && bokstavType == "vokal"}
    <h2>Nei! &#x1F44E; Prøv igjen.</h2>
{/if}

<style>
    
</style>