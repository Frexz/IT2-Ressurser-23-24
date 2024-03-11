<script>
    import chartjs from 'chart.js/auto'
    import { onMount } from 'svelte'


    let canvas
    let ctx

    onMount(() => {
        ctx = canvas.getContext("2d")

        new chartjs(ctx, { // chartjs bør bli grønn
            type: 'bar', // her kan du endre typen diagram
            data: {
                labels: [], // Legg inn x-verdier/merkelapper
                datasets: [{
                    label: "Label",
                    data: [], // Legg inn y-verdier
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
        width: 100vw;
    }
</style>