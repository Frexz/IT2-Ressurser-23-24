<script>
    /* https://www.matvaretabellen.no/ */

    let matvarer = [
        {"navn": "eple", "energi": 47, "fett": 0.1, "karbo": 10, "protein": 0.3, "kalsium": 5, "jern": 0.1, "kalium": 133},
        {"navn": "banan", "energi": 84, "fett": 0.3, "karbo": 18.3, "protein": 1.2, "kalsium": 6, "jern": 0.3, "kalium": 330},
        {"navn": "brownie", "energi": 421, "fett": 20.2, "karbo": 54.2, "protein": 4, "kalsium": 39, "jern": 3, "kalium": 223}
    ]

    let brukerinput = ""
    let feilmelding = ""
    let treff = ""

    function sjekkDatabase(vare) {
        treff = ""

        for (const matvare of matvarer) {
            if (matvare["navn"] == vare.toLowerCase()) {
                treff = matvare["navn"]
                feilmelding = ""
                return
            }
        }

        feilmelding = `${vare} er ikke i databasen.`
    }
</script>

<h1>Næringsinnhold</h1>

<div class="input">
    <label for="">Skriv inn navn på en matvare</label>
    <input type="text" bind:value={brukerinput}>
    <button on:click={() => sjekkDatabase(brukerinput)}>Sjekk database</button>
</div>

<table>
    <tr style="background-color: darkseagreen;">
        <td>Navn</td>
        <td>Energi (kcal)</td>
        <td>Fett (g)</td>
        <td>Karbohydrater (g)</td>
        <td>Protein (g)</td>
        <td>Kalsium (mg)</td>
        <td>Jern (mg)</td>
        <td>Kalium (mg)</td>
    </tr>

    {#each matvarer as m}
        {#if m["navn"] == treff}
            <tr>
                <!-- <td>{m["navn"]}</td>
                <td>{m["energi"]}</td>
                <td>{m["fett"]}</td>
                <td>{m["karbo"]}</td>
                <td>{m["protein"]}</td>
                <td>{m["kalsium"]}</td>
                <td>{m["jern"]}</td>
                <td>{m["kalium"]}</td> -->
                
                <!-- Litt annerledes enn oppgaven men Object.keys() returnerer en liste over nøkler man kan bruke #each-blokk på -->
                {#each Object.keys(m) as key}
                    <td>{m[key]}</td>
                {/each}
            </tr>
        {/if}
    {/each}

    <h3 style="color: red;">{feilmelding}</h3>
</table>

<style>
    input {
        margin-bottom: 10px;
    }

    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
        padding: 10px;
    }
</style>