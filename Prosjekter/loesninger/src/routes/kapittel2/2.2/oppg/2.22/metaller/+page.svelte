<script>
    import Navigasjonsmeny from "../_komponenter/Navigasjonsmeny.svelte";
    import Grunnstoff from "../_komponenter/Grunnstoff.svelte";

    let metaller = [
        {"navn": "Litium", "nummer": 3, "symbol": "Li", "type": "metall"},
        {"navn": "Natrium", "nummer": 11, "symbol": "Na", "type": "metall"},
        {"navn": "Magnesium", "nummer": 12, "symbol": "Mg", "type": "metall"},
        {"navn": "Aluminium", "nummer": 13, "symbol": "Al", "type": "metall"},
        {"navn": "Kalsium", "nummer": 20, "symbol": "Ca", "type": "metall"},
        {"navn": "Titan", "nummer": 22, "symbol": "Ti", "type": "metall"},
        {"navn": "Kobber", "nummer": 29, "symbol": "Cu", "type": "metall"},
        {"navn": "Sink", "nummer": 30, "symbol": "Zn", "type": "metall"},
        {"navn": "Sølv", "nummer": 47, "symbol": "Ag", "type": "metall"},
        {"navn": "Gull", "nummer": 79, "symbol": "Au", "type": "metall"},
    ]
</script>

<Navigasjonsmeny></Navigasjonsmeny>
<h1>Metaller</h1>

<div class="metaller">
    {#each metaller as metall}
        <Grunnstoff navn={metall["navn"]} nummer={metall["nummer"]} symbol={metall["symbol"]} type={metall["type"]}></Grunnstoff>
    {/each}
</div>

<style>
    .metaller {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 30px;
    }
</style>