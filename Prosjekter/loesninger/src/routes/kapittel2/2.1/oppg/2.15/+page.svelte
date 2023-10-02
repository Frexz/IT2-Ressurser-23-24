<script>
    import { veksleFraTil } from "../../../../../../../gjenbruk/mineFunksjoner"

    let fraValuta
    let tilValuta
    let beløp
    let veksletBeløp
    let melding = ""
    let overskrifter = ["Beløp", "Fra Valuta", "Til Valuta"]

    function håndterKlikk() {
        veksletBeløp = veksleFraTil(beløp, fraValuta, tilValuta)
        melding = `${beløp} ${fraValuta} tilsvarer ${veksletBeløp.toFixed(2)} ${tilValuta}`
    }
</script>

<div class="brukerinputs">
    {#each overskrifter as overskrift}
        <p>{overskrift}</p>
    {/each}

    <input type="number" bind:value={beløp}>
   
    <select bind:value={fraValuta}>
        <option value="">---</option>
        <option value="EUR">Euro (EUR)</option>
        <option value="USD">Amerikanske dollar (USD)</option>
        <option value="GBP">Britiske pund (GBP)</option>
        <option value="JPY">Japanske yen (JPY)</option>
        <option value="NOK">Norske kroner (NOK)</option>
    </select>

    <select bind:value={tilValuta}>
        <option value="">---</option>
        <option value="EUR">Euro (EUR)</option>
        <option value="USD">Amerikanske dollar (USD)</option>
        <option value="GBP">Britiske pund (GBP)</option>
        <option value="JPY">Japanske yen (JPY)</option>
        <option value="NOK">Norske kroner (NOK)</option>
    </select>

    <button on:click={håndterKlikk}>Veksle</button>
    <p>{melding}</p>
</div>

<style>
    input, select {
        height: 20px;
    }

    .brukerinputs {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 300px);
        gap: 20px;
    }
</style>