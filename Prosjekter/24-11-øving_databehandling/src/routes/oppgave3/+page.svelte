<script>
    import video_games from '$lib/video_games.json'
    import chartjs from 'chart.js/auto'
    import { onMount } from 'svelte'

    let actitler = []
    let cdprojekt = []
    let witcherSalg = {
        "Nord-Amerika": 0,
        "Europa": 0,
        "Japan": 0,
        "Andre": 0
    }
    video_games.forEach(element => {
        if (element.Name.includes("Assassin's Creed")) {
            actitler.push(element.Name)
        }

        if (element.Developer.includes("CD Projekt Red Studio")) {
            cdprojekt.push(element.Name)
        }

        if (element.Name == "The Witcher 3: Wild Hunt") {
            witcherSalg["Nord-Amerika"] += element.NA_Sales
            witcherSalg["Europa"] += element.EU_Sales
            witcherSalg["Japan"] += element.JP_Sales
            witcherSalg["Andre"] += element.Other_Sales
            
        }
    })

    let unikeACTitler = [...new Set(actitler)]
    unikeACTitler = unikeACTitler.map(element => {return element.replace(":", "")})
    unikeACTitler.sort()

    let unikeCDTitler = [...new Set(cdprojekt)]
    unikeCDTitler.sort()
    console.log(unikeCDTitler);

    let canvas
    let ctx

    onMount(() => {
        ctx = canvas.getContext('2d')

        new chartjs(ctx, {
            type: "bar",
            data: {
                labels: Object.keys(witcherSalg),
                datasets: [{
                    label: "The Witcher 3 salg per verdensdel i millioner kopier solgt",
                    data: Object.values(witcherSalg)
                }]
            }
        })
    })


</script>

<a href="/">Tilbake</a>

<h3>Assassin's Creed Titler</h3>
<ul>
    {#each unikeACTitler as tittel}
        <li>{tittel}</li>
    {/each}
</ul>

<h3>CD Prosjekt Red Studio Titler</h3>
<ul>
    {#each unikeCDTitler as tittel}
        <li>{tittel}</li>
    {/each}
</ul>

<div class="chart">
    <canvas bind:this={canvas}></canvas>
</div>

<style>
    ul {
        list-style-type: none;
    }

    .chart {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 600px;
        width: 800px;
    }
</style>