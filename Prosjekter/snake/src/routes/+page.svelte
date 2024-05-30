<script>
    import { onMount } from 'svelte'
    import { Slange, Spillbrett, Eple } from './klasser'

    let RUTELENGDE = 20
    let BREDDE = 40
    let HØYDE = 30
    let dt = 100

    let spillbrett = new Spillbrett(BREDDE*RUTELENGDE, HØYDE*RUTELENGDE)
    let slange = new Slange(Math.floor(spillbrett.bredde / 2), Math.floor(spillbrett.høyde / 2))
    let eple = new Eple(Math.floor(spillbrett.bredde * 3/4), Math.floor(spillbrett.høyde / 2))

    let canvas
    let ctx
    let id
    
    onMount(() => {
        ctx = canvas.getContext("2d")
        id = setInterval(() => update(ctx), dt)
    })

    function update(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, spillbrett.bredde, spillbrett.høyde)

        ctx.fillStyle = "lime"
        ctx.fillRect(slange.x, slange.y, RUTELENGDE, RUTELENGDE)

        slange.kropp.forEach(kroppsdel => {
            ctx.fillRect(kroppsdel[0], kroppsdel[1], RUTELENGDE, RUTELENGDE)
        })

        ctx.fillStyle = "red"
        ctx.fillRect(eple.x, eple.y, RUTELENGDE, RUTELENGDE)

        slange.move(RUTELENGDE)
        sjekkKollisjonVegg()
        harSpist()

        if (spillbrett.erOver) {
            clearInterval(id)
        }
    }

    function handleKeydown(e) {
        switch (e.key) {
            case 'w':
                slange.vx = 0
                slange.vy = -1
                break;
            case 's':
                slange.vx = 0
                slange.vy = 1
                break;
            case 'a':
                slange.vx = -1
                slange.vy = 0
                break;
            case 'd':
                slange.vx = 1
                slange.vy = 0
                break;
            default:
                break;
        }
    }

    function sjekkKollisjonVegg() {
        if (slange.y < 0 || 
            slange.y > spillbrett.høyde - RUTELENGDE ||
            slange.x < 0 ||
            slange.x > spillbrett.bredde - RUTELENGDE) {
            
            spillbrett.erOver = true
        }
    }

    function harSpist() {
        if (slange.x == eple.x && slange.y == eple.y) {
            slange.kropp.push([eple.x, eple.y])
            eple = new Eple(Math.floor(BREDDE*Math.random())*RUTELENGDE, Math.floor(HØYDE*Math.random())*RUTELENGDE)
        }
    }


</script>

<div class="innhold">
    <canvas bind:this={canvas} height={spillbrett.høyde} width={spillbrett.bredde} />
</div>

<svelte:window on:keydown|preventDefault = {(e) => handleKeydown(e)}/>

<style>
    .innhold {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>