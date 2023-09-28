<script>
    import { ordnetUtvalg } from "../../../../../../../gjenbruk/mineFunksjoner"

    let sifre = ""
    let r = 0
    let melding = ""
    let meldingKombinasjoner = ""
    let antallKombinasjoner
    let kombinasjoner = []

    function sjekkInput() {
        if (r > sifre.length) {
            melding = "Kan ikke ha flere sifre enn utvalg."
            return
        }

        antallKombinasjoner = ordnetUtvalg(sifre.length, r)
        kombinasjoner = [] // Nullstiller arrayet
        lagKombinasjoner("", sifre)
        

        melding = `Antall kombinasjoner: ${antallKombinasjoner}`
        meldingKombinasjoner = "Kombinasjoner: "
    }

    /* Denne funksjonen lager de ulike kombinasjonene. Dette er en rekursiv funksjon og er ikke pensum, men
    denne oppgaven er svært vanskelig å løse uten å bruke en rekursiv funksjon. */
    function lagKombinasjoner(utvalg, gjenværende) {
        if (utvalg.length == r) {
            kombinasjoner.push(utvalg)
            return
        }

        for (let i = 0; i < gjenværende.length; i++) {
            let siffer = gjenværende.charAt(i)
            utvalg = utvalg + siffer
            let nyGjenværende = gjenværende.slice(0, i) + gjenværende.slice(i + 1)

            lagKombinasjoner(utvalg, nyGjenværende)

            utvalg = utvalg.slice(0, utvalg.length - 1)
        }
    }


</script>

<p class="tekst">
    Hvis man har tallene 1, 2, 3 og skal lage tosifrede kombinasjoner uten tilbakelegg, altså et ordnet utvalg,
    må man se hvor mange muligheter man har som første siffer og multiplisere med antall muligheter for andre siffer.
    Dette blir 3 * 2 = 6 ulike kombinasjoner/muligheter. Man har følgende ulike kombinasjoner:
</p>

<div class="kombinasjoner">
    <p>12</p>
    <p>21</p>
    <p>31</p>
    <p>13</p>
    <p>23</p>
    <p>32</p>
</div>

<hr>

<label for="">Oppgi utvalget av siffere</label>
<input type="tekst" bind:value={sifre}>
<label for="">Oppgi hvor mange sifre kombinasjonene skal ha</label>
<input type="number" bind:value={r}>
<button on:click={sjekkInput}>Lag tilfeldig tall</button>
<p>{melding}</p>
<p>{meldingKombinasjoner}</p>

<div class="kombinasjoner2">
    {#each kombinasjoner as kombo}
        <p>{kombo}</p>
    {/each}
</div>


<style>
    hr {
        margin-bottom: 50px;
        width: 100%;
    }

    input {
        margin: 10px;
    }

    .tekst {
        display: flex;
        flex-wrap: wrap;
        width: 30vw;
    }

    .kombinasjoner {
        display: grid;
        grid-template-columns: 50px 50px 50px;
        grid-template-rows: 20px 20px;
        gap: 10px; 
        width: 10vw;
        margin-bottom: 50px;
    }

    .kombinasjoner2 {
        display: grid;
        grid-template-columns: repeat(10, 50px);
        gap: 10px;
        width: 30vw;
    }
</style>