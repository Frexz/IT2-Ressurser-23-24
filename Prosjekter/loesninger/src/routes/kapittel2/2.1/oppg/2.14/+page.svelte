<script>
    import { storForbokstav } from "../../../../../../../gjenbruk/mineFunksjoner"

    let brennstoff
    let energi
    let tabellOverskrifter = ["Type brennstoff", "kg CO2-utslipp per kWh produsert energi"]
    let utslipp
    let melding

    function lagUtslippstabell() {
        let tabell = []
        tabell.push(
            {"brennstoff": "Ved", "utslipp": 0.42},
            {"brennstoff": "Brunkull", "utslipp": 0.29},
            {"brennstoff": "Naturgass", "utslipp": 0.23},
            {"brennstoff": "Biodiesel", "utslipp": 0.24},
            {"brennstoff": "Metan", "utslipp": 0.18},
        )
        return tabell
    }

    function utslippFor(brennstoff) {
        let utslippstabell = lagUtslippstabell()

        /* Denne typen for-løkke går gjennom hvert element i arrayet uten bruk av indekser */
        for (const rad of utslippstabell) {
            if (rad["brennstoff"].toLowerCase() == brennstoff.toLowerCase()) {
                return rad["utslipp"]
            }
        }
    }

    function utslippDataFor(brennstoff, energimengde) {
        return utslippFor(brennstoff) * energimengde
    }

    function håndterKlikk() {
        utslipp = utslippDataFor(brennstoff, energi)
        melding = `<b>${storForbokstav(brennstoff)}</b> slipper ut ${utslipp.toFixed(2)} kg CO2 med en energiproduksjon på ${energi} kWh.`
    }

    
</script>

<div class="innhold">
    <div class="utslippstabell">
        <table>
            <tr class="tabelloverskrifter">
                <td>{tabellOverskrifter[0]}</td>
                <td>{tabellOverskrifter[1]}</td>
            </tr>
    
            {#each lagUtslippstabell() as brennstoff}
                <tr>
                    <td class="brennstoff">{brennstoff["brennstoff"]}</td>
                    <td class="utslipp">{brennstoff["utslipp"]}</td>
                </tr>
            {/each}
        </table>
    </div>
    
    <div class="brukerinput">
        <p>Angi type brennstoff: </p>
        <input type="text" bind:value={brennstoff}>
        <p>Angi ønsket mengde energiproduksjon (i kWh): </p>
        <input type="number" bind:value={energi}>
        <button on:click={håndterKlikk}>Regn ut</button>
        {#if melding}
            <p>{@html melding}</p>
        {/if}
    </div>
</div>

<style>
    input {
        height: 15px;
    }

    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
        padding: 7px;
    }

    .brukerinput {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 20px);
        gap: 20px;
        width: 30vw;
    }

    .innhold {
        display: flex;
        flex-direction: row;
        gap: 100px;
    }

    .tabelloverskrifter {
        background-color: rgb(91, 181, 110);
    }

    .brennstoff {
        background-color: rgb(161, 245, 179);
    }

    .utslipp {
        text-align: right;
    }
</style>