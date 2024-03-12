<script>
    import exoplanets from '$lib/exoplanets.json'

    let filtered = exoplanets.filter(element => {return element.kepler_name != ""})
    filtered.sort((a, b) => {return b.koi_period - a.koi_period})
    let omløp = filtered.slice(0, 5)
</script>

<a href="/">Tilbake</a>

<h1>Lengst omløpstid</h1>
<table>
    <tr>
        <th>Navn</th>
        <th>Omløptid i dager</th>
    </tr>
    {#each omløp as planet}
        <tr>
            <td>{planet.kepler_name}</td>
            <td>{planet.koi_period.toFixed()}</td>
        </tr>
    {/each}
</table>

<style>
    table {
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid black;
        padding: 10px;
    }

    th {
        background-color: cadetblue;
    }
</style>