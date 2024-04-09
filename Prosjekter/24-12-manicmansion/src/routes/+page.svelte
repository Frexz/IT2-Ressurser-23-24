<script>
    import { onMount } from 'svelte'
    import { Spillbrett, Menneske } from '$lib/klasser.js'

    let spillbrett = new Spillbrett(1000, 500)
    let menneske = new Menneske()
    spillbrett.leggTil(menneske)
    menneske.plassering(spillbrett.fri / 2, spillbrett.h / 2)

    let canvas
    let ctx
    let id
    
    onMount(() => {
        ctx = canvas.getContext("2d")
        id = requestAnimationFrame(() => update(ctx))
    })

    function update(ctx) {
        /* Spillbrett */
        let gradient = ctx.createLinearGradient(0, 0, spillbrett.b, 0)
        gradient.addColorStop(0, "#21a63e")
        gradient.addColorStop(0.2, "#0d3d18")
        gradient.addColorStop(0.8, "#0d3d18")
        gradient.addColorStop(1, "#21a63e")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, spillbrett.b, spillbrett.h)

        /* Frisone */
        ctx.beginPath()
        ctx.moveTo(spillbrett.fri, 0)
        ctx.lineTo(spillbrett.fri, spillbrett.h)
        ctx.moveTo(spillbrett.b - spillbrett.fri, 0)
        ctx.lineTo(spillbrett.b - spillbrett.fri, spillbrett.h)
        ctx.lineWidth = 2
        ctx.strokeStyle = "white"
        ctx.stroke()

        /* Objekter */
        spillbrett.objekter.forEach(obj => {
            if (obj instanceof Menneske) {
                ctx.fillStyle = "#593f18"
                ctx.fillRect(obj.x, obj.y, obj.side, obj.side)
                obj.beveg()
            }
        })

        id = requestAnimationFrame(() => update(ctx))
    }

    function handleKeyDown(e) {
        switch (e.key) {
            case 'w':
                menneske.vy = -1
                menneske.vx = 0
                break;
            case 's':
                menneske.vy = 1
                menneske.vx = 0
                break;
            case 'a':
                menneske.vx = -1
                menneske.vy = 0
                break;
            case 'd':
                menneske.vx = 1
                menneske.vy = 0
                break;

            default:
                break;
        }
    }


</script>

<div class="innhold">
    <canvas bind:this={canvas} height={spillbrett.h} width={spillbrett.b} />
</div>

<svelte:window on:keydown|preventDefault={(e) => handleKeyDown(e)}/>

<style>
    .innhold {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>