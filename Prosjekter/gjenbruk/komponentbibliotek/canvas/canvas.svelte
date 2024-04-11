<script>
    import { onMount } from 'svelte'
    import { Spillbrett } from './klasser'

    let spillbrett = new Spillbrett(800, 600)

    let canvas
    let ctx
    let id
    
    onMount(() => {
        ctx = canvas.getContext("2d")
        id = requestAnimationFrame(() => update(ctx))
    })

    function update(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, spillbrett.bredde, spillbrett.høyde)

        spillbrett.objekter.forEach(element => {
            // Tegn forskjellige objekter her
        })

        id = requestAnimationFrame(() => update(ctx))
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