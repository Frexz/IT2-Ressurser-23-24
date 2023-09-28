<script>
    import { vektor, lengde } from "../../../../../../../gjenbruk/mineFunksjoner"

    let x1
    let y1
    let x2
    let y2
    let vektorlengde
    let vektorkoordinater

    function håndterKlikk() {
        vektorkoordinater = vektor(x1, y1, x2, y2)
        vektorlengde = lengde(vektorkoordinater)
    }
</script>

<div class="innhold">
    <div class="inputs">
        <p>Skriv inn x-koordinatet til punkt 1:</p>
        <input type="number" bind:value={x1}>
        <p>Skriv inn y-koordinatet til punkt 1:</p>
        <input type="number" bind:value={y1}>
        <p>Skriv inn x-koordinatet til punkt 2:</p>
        <input type="number" bind:value={x2}>
        <p>Skriv inn y-koordinatet til punkt 2:</p>
        <input type="number" bind:value={y2}>
    </div>
    <button on:click={håndterKlikk}>Finn lengde</button>
    {#if vektorlengde}
        <p><b>Lengde av vektor &#91;{vektorkoordinater}&#93;:</b> {vektorlengde.toFixed(2)}</p>
    {/if}
</div>

<style>
    button {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        width: 100%
    }

    input {
        height: 20px;
    }

    .inputs{
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 20px;
    }
</style>