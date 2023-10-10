<script>
    import Navigasjonsmeny from "../_komponenter/Navigasjonsmeny.svelte";
    import Grunnstoff from "../_komponenter/Grunnstoff.svelte";

    let halvmetaller = [
        {"navn": "Bor", "nummer": 5, "symbol": "B", "type": "halvmetall"},
        {"navn": "Silisium", "nummer": 14, "symbol": "Si", "type": "halvmetall"},
        {"navn": "Germanium", "nummer": 32, "symbol": "Ge", "type": "halvmetall"},
        {"navn": "Arsen", "nummer": 33, "symbol": "As", "type": "halvmetall"},
        {"navn": "Antimon", "nummer": 51, "symbol": "Sb", "type": "halvmetall"},
        {"navn": "Tellur", "nummer": 52, "symbol": "Te", "type": "halvmetall"},
    ]
</script>

<Navigasjonsmeny></Navigasjonsmeny>
<h1>Halvmetaller</h1>
<div class="metaller">
    {#each halvmetaller as metall}
        <Grunnstoff navn={metall["navn"]} nummer={metall["nummer"]} symbol={metall["symbol"]} type={metall["type"]}></Grunnstoff>
    {/each}
</div>

<style>
    .metaller {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 30px;
    }
</style>