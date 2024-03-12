<script>
    import exoplanets from '$lib/exoplanets.json'

    let filtered = exoplanets.filter(element => {return element.kepler_name != "" && typeof element.koi_teq == "number"})
    filtered.sort((a, b) => {return b.koi_teq - a.koi_teq})
    let høyeste = filtered.slice(0, 3)
    filtered.sort((a, b) => {return a.koi_teq - b.koi_teq})
    let laveste = filtered.slice(0, 3)
</script>

<a href="/">Tilbake</a>

<h1>Høyeste Temperatur</h1>
<table>
    <tr>
        <th>Navn</th>
        <th>Temperatur i &deg;C</th>
    </tr>
    {#each høyeste as planet}
        <tr>
            <td>{planet.kepler_name}</td>
            <td>{planet.koi_teq - 273}</td>
        </tr>
    {/each}
</table>

<h1>Laveste Temperatur</h1>
<table>
    <tr>
        <th>Navn</th>
        <th>Temperatur i &deg;C</th>
    </tr>
    {#each laveste as planet}
        <tr>
            <td>{planet.kepler_name}</td>
            <td>{planet.koi_teq - 273}</td>
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
        text-align: right;
    }

    th {
        background-color: orange;
    }
</style>