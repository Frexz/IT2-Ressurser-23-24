<script>
    import { veksleFraTil } from "../../../../../../../gjenbruk/mineFunksjoner"

    let fraValuta
    let tilValuta
    let beløp
    let overskrifter = ["Beløp", "Fra Valuta", "Til Valuta"]
</script>

<div class="brukerinputs">
    {#each overskrifter as overskrift}
        <p>{overskrift}</p>
    {/each}
    <div class="beløp">
        <input type="number" bind:value={beløp}>
        <p>kr</p>
    </div>
</div>

<style>
    .beløp {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    .brukerinputs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
</style>