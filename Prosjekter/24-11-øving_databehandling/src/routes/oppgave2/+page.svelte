<script>
    import sykkelturer from '$lib/sykkelturer.json'
    import chartjs from 'chart.js/auto'
    import { onMount } from 'svelte'

    let startlokasjoner = {}
    let ukedager = {}

    sykkelturer.forEach(element => {
        /* Fordeler dataen på navnet på start stasjonen med tilhørende antall turer */
        if (element.start_station_name in startlokasjoner) {
            startlokasjoner[element.start_station_name]++
        } else {
            startlokasjoner[element.start_station_name] = 1
        }

        /* Det innebygde Date-objektet tar imot en streng av et spesifikt datoformat og omgjør det til et Date-objekt som
        inneholder informasjon om den datoen, blant annet hvilken ukedag det var/er. Metoden getDay() returnerer et tall mellom
        0 - 6 der 0 er søndag og 6 er lørdag */
        let date = new Date(element.started_at)
        let day = date.getDay()

        /* Foredeler dataen på ukedager med tilhørende antall */
        if (day in ukedager) {
            ukedager[day]++
        } else {
            ukedager[day] = 1
        }
    })

    /* Sorterer startstasjoner etter antall og henter ut de tre mest brukte og de tre minst brukte */
    let startlokasjonerSorted = Object.entries(startlokasjoner).sort((a, b) => {return b[1] - a[1]})
    let mestBrukt = startlokasjonerSorted.slice(0, 3)
    let minstBrukt = startlokasjonerSorted.slice(-3, startlokasjonerSorted.length)

    /* Object.values(ukedager) gir oss kun verdiene (antallet) til hver ukedag. */
    let ukedagerNavn = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
    let antall = Object.values(ukedager)

    let canvas
    let ctx

    onMount(() => {
        ctx = canvas.getContext('2d')

        new chartjs(ctx, {
            type: 'bar',
            data: {
                labels: ukedagerNavn,
                datasets: [{
                    label: "Antall turer per ukedag",
                    data: antall,
                    backgroundColor: "green"
                }]
            }
        })
    })
</script>

<a href="/">Tilbake</a>

<h3>Mest brukt</h3>
<table>
    <tr>
        <th>Startstasjon</th>
        <th>Antall</th>
    </tr>

    {#each mestBrukt as stasjon}
        <tr>
            <td>{stasjon[0]}</td>
            <td>{stasjon[1]}</td>
        </tr>
    {/each}
</table>

<h3>Mest brukt</h3>
<table>
    <tr>
        <th>Startstasjon</th>
        <th>Antall</th>
    </tr>

    {#each minstBrukt.reverse() as stasjon}
        <tr>
            <td>{stasjon[0]}</td>
            <td>{stasjon[1]}</td>
        </tr>
    {/each}
</table>

<div class="chart">
    <canvas bind:this={canvas}/>
</div>

<style>
    th, td {
        border: 1px solid black;
        padding: 10px;
    }

    th {
        background-color: green;
    }

    table {
        border-collapse: collapse;
    }

    .chart {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 600px;
        width: 800px;
    }
</style>