<script>
    import stats from '$lib/global_youtube_stats.json'

    let land = {}

    for (const kanal of stats) {
        if (kanal["Country"] == "nan") {
            continue
        }

        if (!(kanal["Country"] in land)) {
            land[kanal["Country"]] = {"kanaler": 1, "subs": kanal["subscribers"], "views": kanal["video views"]}
        } else {
            land[kanal["Country"]]["kanaler"] += 1
            land[kanal["Country"]]["subs"] += kanal["subscribers"]
            land[kanal["Country"]]["views"] += kanal["video views"]
        }
    }
    
    let sorterteLand = Object.entries(land).sort((a, b) => b[1]["kanaler"] - a[1]["kanaler"])
    let toppTiLand = sorterteLand.slice(0, 10)
    
</script>

<table>
    <tr>
        <th>
            Land
        </th>

        <th>
            Antall kanaler
        </th>

        <th>Gjennomsnittlige abonnementer</th>
        <th>Gjennomsnittlige visninger</th>
    </tr>
    {#each toppTiLand as land}
        <tr>
            <td>{land[0]}</td>
            <td>{land[1]["kanaler"]}</td>
            <td>{(land[1]["subs"] / land[1]["kanaler"]).toFixed(0)}</td>
            <td>{(land[1]["views"] / land[1]["kanaler"]).toFixed(0)}</td>
        </tr>
    {/each}
</table>

<style>
    
</style>