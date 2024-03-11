<script>
    import chartjs from 'chart.js/auto'
    import { onMount } from 'svelte'
    import monsters from '$lib/dnd5e_monsters.json'

    let drager = monsters.filter(element => {return element.Type == "dragon"})
    drager.sort((a, b) => {return b.CR - a.CR})
    let sterkeste = drager.slice(0, 10)
    
    let navn = sterkeste.map(element => {return element.Name})
    let hp = sterkeste.map(element => {return element.HP})

    let canvas
    let ctx

    onMount(() => {
        ctx = canvas.getContext("2d")

        new chartjs(ctx, { // chartjs bør bli grønn
            type: 'bar', // her kan du endre typen diagram
            data: {
                labels: navn, // Legg inn x-verdier/merkelapper
                datasets: [{
                    label: "Sterkeste drager",
                    data: hp, // Legg inn y-verdier
                    backgroundColor: [
                        "gold",
                        "red",
                        "blue",
                        "silver",
                        "brown",
                        "green",
                        "black",
                        "orange",
                        "darkgoldenrod",
                        "beige"
                    ]
                }]
            }
        })
    })
</script>

<a href="/">Tilbake</a>

<div class="chart">
    <canvas bind:this={canvas}/>
</div>

<style>
    .chart {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 600px;
        width: 800px;
    }
</style>