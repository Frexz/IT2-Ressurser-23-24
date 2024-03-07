<script>
    import youtube from '$lib/youtube.json'

    /* Sorterer alle kanelene i grupper fordelt på land. Kanaler med "nan" er filtrert vekk
    og ikke tatt med videre. */
    let countries = {}
    youtube.forEach(element => {
        if (element.Country in countries) {
            countries[element.Country].push(element)
        } else {
            if (element.Country != "nan") {
                countries[element.Country] = [element]
            }
        }
    })

    /* Landene er sortert etter flest kanaler i synkende rekkefølge og de ti med flest er tatt med. */
    let top10 = Object.entries(countries).sort((a, b) => {return b[1].length - a[1].length}).slice(0, 10)

    /* Array med navn på de 10 landene. */
    let land = top10.map(element => {return element[0]})
    /* Array med antall visninger der antallene samsvarer med landene i land-arrayet. */
    let antall = top10.map(element => {return element[1].length})
    /* Array med gj.snittlige aboonementer */
    let abonnementer = []
    /* Array med gj.snittlige visninger */
    let visninger = []

    top10.forEach(land => {
        let sumAbo = 0
        let sumVis = 0
        let antallAbo = 0
        let antallVis = 0
        land[1].forEach(kanal => {
            /* Sørger for å ta med verdier som kun er av type number, i tilfelle noen av tallene skulle
            vært formatert som strenger */
            if (typeof kanal.subscribers == "number") {
                sumAbo += kanal.subscribers
                antallAbo++
            }

            /* Sørger for å ta med verdier som kun er av type number, i tilfelle noen av tallene skulle
            vært formatert som strenger */
            if (typeof kanal["video views"] == "number") {
                sumVis += kanal["video views"]
                antallVis++
            }
        })

        /* Regner ut gjennomsnitt og legger til i respektive arrays. */
        abonnementer.push((sumAbo / antallAbo).toFixed())
        visninger.push((sumVis / antallVis).toFixed())
    })
    
    
</script>

<a href="/">Tilbake</a>

<div class="table">
    <table>
        <tr>
            <th>Land</th>
            <th>Antall kanaler</th>
            <th>Gj.snitt abonnementer</th>
            <th>Gj.snitt visninger</th>
        </tr>
    
        {#each land as l, i}
            <tr>
                <td>{l}</td>
                <td>{antall[i]}</td>
                <td>{abonnementer[i]}</td>
                <td>{visninger[i]}</td>
            </tr>
        {/each}

    </table>
</div>

<style>
    table {
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid black;
        padding: 10px;
    }

    th {
        background-color: cornflowerblue;
    }

    .table {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 600px;
        width: 800px;
    }
</style>