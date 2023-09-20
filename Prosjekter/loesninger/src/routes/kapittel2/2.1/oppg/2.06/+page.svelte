<script>
    let valg
    let melding = "Velg en pokémon fra menyen"
    let farge1
    let farge2

    function visMelding() {
        melding = `${valg}, I choose you!`
    }

    $: {
        /* En switch-case-blokk fungerer som en if-setning der man bare sjekker bestemte tilfeller
        av en variabel. Under blir ulike verdier av variabelen "valg" sjekket og koden i hvert "case"
        blir utført. Inntreffer ingen av "casene" er det koden i default som kjører. Nøkkelordet
        "break" betyr bare at man hopper ut av blokken man er i. */
        switch (valg) {
            case "Bulbasaur":
                farge1 = "#8fcfb4"
                farge2 = "#5d9c70"
                break;
            case "Charmander":
                farge1 = "#f4e6cc"
                farge2 = "#f4b185"
                break;
            case "Squirtle":
                farge1 = "#84cbdd"
                farge2 = "#b37b6e"
                break;
            case "Pikachu":
                farge1 = "#f2d77e"
                farge2 = "#313332"
                break;
            case "Eevee":
                farge1 = "#f6e3b9"
                farge2 = "#bf8b5b"
                break;
            default:
                break;
        }
    }

</script>

<select bind:value={valg} on:change={visMelding}>
    <option value="">---</option>
    <option value="Bulbasaur">Bulbasaur</option>
    <option value="Charmander">Charmander</option>
    <option value="Squirtle">Squirtle</option>
    <option value="Pikachu">Pikachu</option>
    <option value="Eevee">Eevee</option>
</select>

{#if valg}
    <h2 style="--farge1: {farge1}; --farge2: {farge2};">{melding}</h2>
{/if}

<style>
    h2 {
        background: -webkit-linear-gradient(0deg, var(--farge1), var(--farge2));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 50px;
        position: absolute;
        top: 55vh;
    }
    select {
        height: 25px;
        position: fixed;
        width: 10vw;
    }
</style>