<script>
    import pokemon from '$lib/pokemon.json'
    import chartjs from 'chart.js/auto'
    import { onMount } from 'svelte'

    let canvas
    let ctx

    //let legendary = pokemon.filter(element => {return element.Legendary == "True"})
    pokemon.sort((a, b) => {return b.Speed - a.Speed})
    let topp = pokemon.slice(0, 10)
    let navn = topp.map(element => {return element.Name})
    let speed = topp.map(element => {return element.Speed})

    onMount(() => {
        ctx = canvas.getContext("2d")

        new chartjs(ctx, {
            type: "bar",
            data: {
                labels: navn,
                datasets: [{
                    label: "Pokemon",
                    data: speed,
                }]
            }
        })
    })
    

</script>

<div class="chart">
    <canvas bind:this={canvas}/>
</div>

<style>
    .chart {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100w;
    }
</style>