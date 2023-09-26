<script>
    import { ordnetUtvalg } from "../../../../../../../gjenbruk/mineFunksjoner"

    let utvalg = ""
    let r = 0
    let melding = ""
    let meldingKombinasjoner = ""
    let antallKombinasjoner
    let kombinasjoner = []

    function sjekkInput() {
        if (r > utvalg.length) {
            melding = "Kan ikke ha flere sifre enn utvalg."
            return
        }

        antallKombinasjoner = ordnetUtvalg(utvalg.length, r)
        lagKombinasjoner(utvalg, utvalg.length, r)
        

        melding = `Antall kombinasjoner: ${antallKombinasjoner}`
        meldingKombinasjoner = `Kombinasjoner: ${kombinasjoner}`
    }

    function lagKombinasjoner(sifre, n, r) {
        kombinasjoner = []
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < r; j++) {
                let tall = sifre.charAt(i)

                if (i == j) {
                    continue
                }

                tall += sifre.charAt(j)
                kombinasjoner.push(tall)
            }
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
<input type="tekst" bind:value={utvalg}>
<label for="">Oppgi hvor mange sifre kombinasjonene skal ha</label>
<input type="number" bind:value={r}>
<button on:click={sjekkInput}>Lag tilfeldig tall</button>
<p>{melding}</p>
<p>{meldingKombinasjoner}</p>


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
</style>