<script>
    import { fordelStrøm } from "../../../../../../../gjenbruk/mineFunksjoner"

    let inngåendeStrøm
    let antallLedningerUt
    let strømUt
    let melding = ""

    function håndterKlikk() {
        let strømInn = inngåendeStrøm.split(",").map((value) => Number(value))
        strømUt = fordelStrøm(strømInn, antallLedningerUt)
        melding = `Utgående strøm fordelt på ${antallLedningerUt} ledninger kan fordeles slik: ${strømUt}`
    }
</script>

<div class="innhold">
    <p>Tast inn inngående strøm separert med ,</p>
    <p>Tast inn antall utgående ledninger</p>
    <input type="text" bind:value={inngåendeStrøm}>
    <input type="number" bind:value={antallLedningerUt}>
    <button on:click={håndterKlikk}>Regn ut utgående strøm</button>
    <p>{melding}</p>
</div>

<style>
    .innhold {
        display: grid;
        grid-template-columns: 300px 300px;
        gap: 30px;
    }
</style>