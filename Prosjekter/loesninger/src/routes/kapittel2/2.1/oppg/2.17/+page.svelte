<script>
    import { erNormalt, storForbokstav, refVerdiTil } from "../../../../../../../gjenbruk/mineFunksjoner"

    const CHECK_MARK = "&#x2705;"
    const RED_FLAG = "&#128681"

    let stoffnavn = ["hemoglobin", "natrium", "kalium", "protein", "jern", "lymfocytter"]
    let pasientVerdier = [0, 0, 0, 0, 0, 0]
    let resultater = ["", "", "", "", "", ""]
    let resultaterKlar = false
    let meldingerForLavt = [
        "For lavt hemoglobin. Vurder å legge til jernrike matvarer i kostholdet ditt, eller ta jerntilskudd.",
        "For lavt natrium. Øk inntak av salt og reduser væskeinntak.",
        "For lavt kalium. Vurder å legge til kaliumrike matvarer i kostholdet ditt, eller ta kaliumtilskudd",
        "For lavt protein. Vurder å legge til proteinrike matvarer i kostholdet ditt, eller ta proteinrike kosttilskudd.",
        "For lavt jern. Vurder å legge til jernrike matvarer i kostholdet ditt, eller ta jerntilskudd.",
        "For lave lymfocytter. Krever behandling av underliggende årsak. Kontakt lege."
    ]

    let meldingerForHøyt = [
        "For høyt hemoglobin. Innta nok væske i løpet av dagen for å unngå dehydrering. Vurder også å stumpe røyken.",
        "For høyt natrium. Øk inntak av væske og reduser saltinntak.",
        "For høyt kalium. Innta nok væske for å skille ut overskuddskalium. Reduser inntak av kaliumsrike matvarer.",
        "For høyt protein. Innta nok væske for å skille ut overskuddsnitrogen. Opprett et balansert kosthold med moderate mengder protein.",
        "For høyt jern. Reduser inntak av jernholding mat og unngå kosttilskudd med jern.",
        "For høye lymfocytter. Krever behandling av underliggende årsak. Kontakt lege."
    ]

    function håndterKlikk() {
        for (let i = 0; i < stoffnavn.length; i++) {
            if (erNormalt(stoffnavn[i], pasientVerdier[i])) {
                resultater[i] = CHECK_MARK
            } else {
                resultater[i] = RED_FLAG
            }
        }

        resultaterKlar = true
    }

    $: {
        if (pasientVerdier) {
            resultaterKlar = false
        }
    }

</script>

<table>
    <tr>
        <td class="header">Type stoff</td>
        <td>Hemoglobin</td>
        <td>Natrium</td>
        <td>Kalium</td>
        <td>Protein</td>
        <td>Jern</td>
        <td>Lymfocytter</td>
    </tr>

    <tr>
        <td class="header">Referanseverdier</td>
        <td>13,4 - 17,0</td>
        <td>137 - 145</td>
        <td>3,6 - 5,0</td>
        <td>62 - 78</td>
        <td>10,0 - 25,0</td>
        <td>1,5 - 6,5</td>
    </tr>
</table>

<hr>

<h1>Pasientundersøkelse</h1>
<div class="brukerinputs">
    
    {#each stoffnavn as navn}
        <p>{storForbokstav(navn)}</p>
    {/each}

    {#each pasientVerdier as verdi, i}
        <input type="number" bind:value={pasientVerdier[i]}>
    {/each}

    {#each resultater as resultat}
        <p>{@html resultat}</p>
    {/each}
</div>

<button on:click={håndterKlikk}>Sjekk pasient</button>

{#if resultaterKlar}
    {#each resultater as resultat, i}
        {#if resultat == RED_FLAG}
            {#if pasientVerdier[i] < refVerdiTil(stoffnavn[i])[0]}
                <p style="color: red;">{meldingerForLavt[i]}</p>
            {:else}
                <p style="color: red;">{meldingerForHøyt[i]}</p>
            {/if}
        {/if}
    {/each}
{/if}

<style>
    hr {
        margin-top: 50px;
        width: 100vw;
    }

    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid green;
        padding: 7px;
        text-align: center;
    }

    .brukerinputs {
        display: grid;
        align-items: center;
        column-gap: 20px;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(6, 30px);
        grid-auto-flow: column;
        margin-bottom: 20px;
    }

    .header {
        background-color: lightgreen;
        text-align: left;
    }
</style>