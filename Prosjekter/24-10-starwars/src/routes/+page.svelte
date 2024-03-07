<script>
    import starwars from '$lib/star_wars.json'
    import chartjs from 'chart.js/auto'
    import { onMount } from 'svelte'
    
    starwars.sort((a, b) => {return b.mass - a.mass})
    let top5 = starwars.slice(0, 5)
    
    let labels = top5.map(element => {return element.name})
    let values = top5.map(element => {return element.mass / (element.height/100)**2})

    let canvas
    let ctx

    onMount(() => {
        ctx = canvas.getContext("2d")

        new chartjs(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: "Mass of Star Wars characters",
                    data: values,
                }]
            }
        })
    })
</script>

<div class="chart">
    <canvas bind:this={canvas} />
</div>

<style>
    .chart {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
        width: 80vw;
    }
</style>