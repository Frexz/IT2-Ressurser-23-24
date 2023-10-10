<script>
    import Navigasjonsmeny from "../_komponenter/Navigasjonsmeny.svelte";
    import Grunnstoff from "../_komponenter/Grunnstoff.svelte";

    let ikkemetaller = [
        {"navn": "Hydrogen", "nummer": 1, "symbol": "H", "type": "ikkemetall"},
        {"navn": "Helium", "nummer": 2, "symbol": "He", "type": "ikkemetall"},
        {"navn": "Karbon", "nummer": 6, "symbol": "C", "type": "ikkemetall"},
        {"navn": "Nitrogen", "nummer": 7, "symbol": "N", "type": "ikkemetall"},
        {"navn": "Oksygen", "nummer": 8, "symbol": "O", "type": "ikkemetall"},
        {"navn": "Fluor", "nummer": 9, "symbol": "F", "type": "ikkemetall"},
        {"navn": "Neon", "nummer": 10, "symbol": "Ne", "type": "ikkemetall"},
        {"navn": "Fosfor", "nummer": 15, "symbol": "P", "type": "ikkemetall"},
        {"navn": "Svovel", "nummer": 16, "symbol": "S", "type": "ikkemetall"},
        {"navn": "Klor", "nummer": 17, "symbol": "Cl", "type": "ikkemetall"},
        {"navn": "Argon", "nummer": 18, "symbol": "Ar", "type": "ikkemetall"},
        {"navn": "Selen", "nummer": 34, "symbol": "Se", "type": "ikkemetall"},
        {"navn": "Brom", "nummer": 35, "symbol": "Br", "type": "ikkemetall"},
        {"navn": "Krypton", "nummer": 36, "symbol": "Kr", "type": "ikkemetall"},
        {"navn": "Jod", "nummer": 53, "symbol": "I", "type": "ikkemetall"},
        {"navn": "Xenon", "nummer": 54, "symbol": "Xe", "type": "ikkemetall"},
        {"navn": "Astat", "nummer": 85, "symbol": "At", "type": "ikkemetall"},
        {"navn": "Radon", "nummer": 86, "symbol": "Rn", "type": "ikkemetall"},
        {"navn": "Oganesson", "nummer": 118, "symbol": "Og", "type": "ikkemetall"},
    ]
</script>

<Navigasjonsmeny></Navigasjonsmeny>
<h1>Halvmetaller</h1>
<div class="metaller">
    {#each ikkemetaller as metall}
        <Grunnstoff navn={metall["navn"]} nummer={metall["nummer"]} symbol={metall["symbol"]} type={metall["type"]}></Grunnstoff>
    {/each}
</div>

<style>
    .metaller {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 30px;
    }
</style>