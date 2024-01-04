<script>
    import { onMount } from 'svelte'

    class Sirkel {
        constructor(x, y, radius, farge) {
            this.x = x
            this.y = y
            this.radius = radius
            this.farge = farge 
        }

        move(r, t) {
            this.x = r * Math.cos(t) + BREDDE/2
            this.y = r * Math.sin(t) + HOYDE/2
        }
    }

    let BREDDE = 600
    let HOYDE = 500

    let canvas
    let ctx
    let id

    let t = 0
    let dt = 0.02

    let sirkel1 = new Sirkel(BREDDE/2, HOYDE/2, 25, "magenta")
    let sirkel2 = new Sirkel(BREDDE/4 * Math.cos(t) + BREDDE/2, BREDDE/4 * Math.sin(t) + HOYDE/2, 12.5, "cornflowerblue")

    
    onMount(() => {
        ctx = canvas.getContext("2d")
        id = requestAnimationFrame(() => update(ctx))
    })

    function update(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, BREDDE, HOYDE)

        ctx.beginPath()
        ctx.arc(sirkel1.x, sirkel1.y, sirkel1.radius, 0, 2*Math.PI)
        ctx.fillStyle = sirkel1.farge
        ctx.fill()
        ctx.closePath()

        t += dt
        sirkel2.move(BREDDE/4, t)

        ctx.beginPath()
        ctx.arc(sirkel2.x, sirkel2.y, sirkel2.radius, 0, 2*Math.PI)
        ctx.fillStyle = sirkel2.farge
        ctx.fill()
        ctx.closePath()
        

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