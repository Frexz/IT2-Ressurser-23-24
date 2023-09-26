<script>
    import { tilfeldigTallMellom } from "../../../../../../../gjenbruk/mineFunksjoner"

    let min = 0
    let maks = 0
    let melding = ""
    let tilfeldigTall

    function sjekkInput() {
        if (min > maks) {
            melding = "Den maksimale verdien kan ikke være mindre enn den minimale verdien."
        } else if (min == maks) {
            melding = "Den maksimale verdien kan ikke være lik den minimale verdien."
        } else {
            tilfeldigTall = tilfeldigTallMellom(min, maks)
            melding = `Tilfeldig tall: ${tilfeldigTall}`
        }
    }
</script>

<label for="">Velg minimal verdi</label>
<input type="number" bind:value={min}>
<label for="">Velg maksimal verdi</label>
<input type="number" bind:value={maks}>
<button on:click={sjekkInput}>Lag tilfeldig tall</button>
<p>{melding}</p>

<style>
    input {
        margin: 10px;
    }
</style>