<script>
    import { tilRadianer, tilGrader } from "../../../../../../../gjenbruk/mineVariabler"

    let grader = 0
    let radianer = 0
</script>

<div class="inputs">
    <h1>Grader til radianer</h1>
    <h1>Radianer til grader</h1>
    <input type="number" bind:value={grader}>
    <input type="number" bind:value={radianer}>
    <p><b>Resultat:</b> {(grader*tilRadianer).toFixed(5)}</p>
    <p><b>Resultat:</b> {(radianer*tilGrader).toFixed(2)}&#176;</p>
</div>

<div class="resultater">

</div>

<style>
    .inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        row-gap: 5px;
        column-gap: 150px;
        height: 100px;
    }
</style>