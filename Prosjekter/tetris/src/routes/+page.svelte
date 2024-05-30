<script>
    import { onMount } from 'svelte'
    import { Spillbrett, Firkant } from '$lib/klasser.js'

    const RUTELENGDE = 35
    const BREDDE = 10
    const HØYDE = 20

    let spillbrett = new Spillbrett(BREDDE*RUTELENGDE, HØYDE*RUTELENGDE)
    let figurer = {
        "firkant": new Firkant(Math.floor((BREDDE/2)) - RUTELENGDE, 0, RUTELENGDE)
    }

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
    <h1>TETRIS</h1>
    <canvas bind:this={canvas} height={spillbrett.høyde} width={spillbrett.bredde} />
</div>

<style>
    .innhold {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>