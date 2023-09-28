<script>
    /* Må teste litt mer */
    import { vinkelenMellom } from "../../../../../../../gjenbruk/mineFunksjoner"
    import { tilGrader } from "../../../../../../../gjenbruk/mineVariabler"

    let x1
    let y1
    let x2
    let y2
    let vektor1
    let vektor2
    let vinkel
    

    function håndterKlikk() {
        vektor1 = [x1, y1]
        vektor2 = [x2, y2]
        vinkel = vinkelenMellom(vektor1, vektor2)
    }
</script>

<div class="innhold">
    <div class="inputs">
        <p>Skriv inn x-koordinatet til vektor 1:</p>
        <input type="number" bind:value={x1}>
        <p>Skriv inn y-koordinatet til vektor 1:</p>
        <input type="number" bind:value={y1}>
        <p>Skriv inn x-koordinatet til vektor 2:</p>
        <input type="number" bind:value={x2}>
        <p>Skriv inn y-koordinatet til vektor 2:</p>
        <input type="number" bind:value={y2}>
    </div>
    <button on:click={håndterKlikk}>Finn vinkel</button>
    {#if vinkel}
        <p><b>Vinkelen mellom &#91;{vektor1}&#93; og &#91;{vektor2}&#93;:</b> {(vinkel*tilGrader).toFixed(2)}&deg;</p>
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