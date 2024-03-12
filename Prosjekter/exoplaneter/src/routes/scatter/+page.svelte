<script>
    import chartjs, { registerables } from 'chart.js/auto'
    import { onMount } from 'svelte'
    import exoplaneter from '$lib/exoplanets.json'


    function dist(p, T) {
        return Math.sqrt((365 - p)**2 + (5773 - T)**2)
    }

    let filtered = exoplaneter.filter(element => {
        return element.kepler_name != "" &&
                typeof element.koi_teq == "number" &&
                typeof element.koi_steff == "number" &&
                typeof element.koi_srad == "number"
    })

    let data = filtered.map(element => {return {"x": element.koi_period, "y": element.koi_steff, "backgroundColor": 'brown', "name": element.kepler_name}})
    data.push({"x": 365, "y": 5773, "backgroundColor": 'lightblue', "name": "Jorden"})

        
    let canvas
    let ctx

    onMount(() => {
        ctx = canvas.getContext("2d")

        new chartjs(ctx, { 
            type: 'scatter', 
            data: {
                datasets: [{
                    label: "Planet med en stjerne lik Sola",
                    data: data,
                    pointBackgroundColor: function(context) {
                        return context.dataset.data[context.dataIndex].backgroundColor;
                    },
                    pointBorderColor: 'rgba(0, 0, 0, 0)'
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        min: 0,
                        max: 730
                    },
                    y: {
                        type: 'linear',
                        position: 'left',
                        min: 0,
                        max: 11000,
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = ' X: ' + context.raw.x + ', Y: ' + context.raw.y; // Default label
                                if (context.raw.name) { // Check if name exists
                                    label = 'Name: ' + context.raw.name + label // Add name to label
                                }
                                return label;
                            }
                        }
                    }
                }
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
        height: 100vh;
        width: 100vw;
    }
</style>