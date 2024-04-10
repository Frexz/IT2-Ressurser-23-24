<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte"
    import { reverser } from "../oppg2/reverser"

    let streng = "tacocat"
    let erPalindrom

    function sjekkPalindrom(streng) {
        // Her gjenbruker vi reverser-funksjonen fra oppgave 2.
        // Et ord er et palindrom hvis det leses likt både forlengs og baklengs.
        if (streng === reverser(streng)) {
            erPalindrom = true
        } else {
            erPalindrom = false
        }
    }

    $: {
        sjekkPalindrom(streng)
    }
    
</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 4</h1>
        <p>
            Skriv et program som tar imot en streng fra brukeren og som sjekker om strengen er et palindrom. 
            Et palindrom er et ord som leses likt forlengs og baklengs, slik som f.eks de engelske ordene «racecar» 
            eller «tacocat» eller de norske ordene «regninger» og «energimigrene».
        </p>
    </div>

    <div class="oppgave" slot="oppgave">
        <h2>Skriv inn en setning</h2>
        <input type="text" bind:value={streng} style="margin-bottom: 50px;">

        <p style="color: {erPalindrom ? 'green' : 'red'}">
        {#if erPalindrom}
            Strengen "{streng}" er et palindrom.
        {:else}
            Strengen "{streng}" er ikke et palindrom.
        {/if}
        </p>
    </div>
</OppgaveLayout>