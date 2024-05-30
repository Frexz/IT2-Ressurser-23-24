<script>
    import { onMount } from 'svelte'
    import { Spillbrett } from '$lib/klasser.js'

    let spillbrett = new Spillbrett(800, 600)

    let canvas
    let ctx
    let id
    let dt = 100
    
    onMount(() => {
        ctx = canvas.getContext("2d")
        id = setInterval(() => update(ctx), dt)
    })

    function update(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, spillbrett.bredde, spillbrett.høyde)

        spillbrett.objekter.forEach(element => {
            // Tegn forskjellige objekter her
        })
    }


</script>

<div class="innhold">
    <canvas bind:this={canvas} height={spillbrett.høyde} width={spillbrett.bredde} />
</div>

<style>
    .innhold {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>