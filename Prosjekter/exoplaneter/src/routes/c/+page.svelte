<script>
    import chartjs from 'chart.js/auto'
    import { onMount } from 'svelte'
    import exoplaneter from '$lib/exoplanets.json'

    function dist(p, T) {
        return Math.abs(365 - p) + Math.abs(5773 - T)
    }

    let filtered = exoplaneter.filter(element => {
        return element.kepler_name != "" &&
                typeof element.koi_teq == "number" &&
                typeof element.koi_steff == "number" &&
                typeof element.koi_srad == "number"
    })

    let planetsDistTemp = filtered.map(element => {
        return {
            "kepler_name": element.kepler_name,
            "koi_teq": element.koi_teq,
            "dist": dist(element.koi_period, element.koi_steff)
        }
    })
    planetsDistTemp.sort((a, b) => {return a.dist - b.dist})
    let top10 = planetsDistTemp.slice(0, 10)

    let names = top10.map(element => {return element.kepler_name})
    let temp = top10.map(element => {return element.koi_teq - 273})

    let canvas
    let ctx

    onMount(() => {
        ctx = canvas.getContext("2d")

        new chartjs(ctx, { 
            type: 'bar', 
            data: {
                labels: names, 
                datasets: [{
                    label: "Planeter lik jorden",
                    data: temp,
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