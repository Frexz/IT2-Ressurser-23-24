<script>
    import { onMount } from 'svelte'
    import { Spillbrett } from 'klasser.js'

    let BREDDE = 1000
    let HOYDE = 500

    let canvas
    let ctx
    let id
    
    onMount(() => {
        ctx = canvas.getContext("2d")
        id = requestAnimationFrame(() => update(ctx))
    })

    function update(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, BREDDE, HOYDE)

        id = requestAnimationFrame(() => update(ctx))
    }


</script>

<div class="innhold">
    <canvas bind:this={canvas} height={HOYDE} width={BREDDE} />
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