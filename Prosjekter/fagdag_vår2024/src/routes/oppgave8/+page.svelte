<script>
    import { onMount } from 'svelte'
    import { Spillbrett, Padde, Ball } from './klasser'

    let spillbrett = new Spillbrett(1200, 700)
    let padde1 = new Padde(50, (spillbrett.høyde / 2) - 60)
    let padde2 = new Padde(spillbrett.bredde - 70, (spillbrett.høyde / 2) - 60)
    let ball = new Ball((spillbrett.bredde / 2) - 12, (spillbrett.høyde / 2) - 12)

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

        ctx.strokeStyle = "white"
        ctx.beginPath()
        ctx.moveTo(spillbrett.bredde / 2, 0)
        ctx.lineTo(spillbrett.bredde / 2, spillbrett.høyde)
        ctx.closePath()
        ctx.stroke()
        
        ctx.fillStyle = "white"
        ctx.fillRect(padde1.x, padde1.y, padde1.bredde, padde1.høyde)
        ctx.fillRect(padde2.x, padde2.y, padde2.bredde, padde2.høyde)

        ctx.fillRect(ball.x, ball.y, ball.side, ball.side)
        ball.move()

        sjekkKollisjonVegg()
        sjekkKollisjonPadde()

        if (spillbrett.poeng1 == 5 || spillbrett.poeng2 == 5) {
            cancelAnimationFrame(id)
        } else {
            id = requestAnimationFrame(() => update(ctx))
        }
        
        ctx.font = "50px Arial"
        ctx.fillText(`${spillbrett.poeng1}`, (spillbrett.bredde / 2) - 85, 70)
        ctx.fillText(`${spillbrett.poeng2}`, (spillbrett.bredde / 2) + 25, 70)
    }

    function handleKeyDown(e) {
        let flyttVerdi = 30

        switch (e.key) {
            case 'w':
                padde1.move(-flyttVerdi)
                if (padde1.y < 0) {
                    padde1.y = 0
                }
                break;
            case 's':
                padde1.move(flyttVerdi)
                if (padde1.y > spillbrett.høyde - padde1.høyde) {
                    padde1.y = spillbrett.høyde - padde1.høyde
                }
                break;
            case 'ArrowUp':
                padde2.move(-flyttVerdi)
                if (padde2.y < 0) {
                    padde2.y = 0
                }
                break;
            case 'ArrowDown':
                padde2.move(flyttVerdi)
                if (padde2.y > spillbrett.høyde - padde2.høyde) {
                    padde2.y = spillbrett.høyde - padde2.høyde
                }
                break;
            default:
                break;
        }
    }

    function sjekkKollisjonVegg() {
        if (ball.y < 0 || ball.y > spillbrett.høyde - ball.side) {
            ball.vy *= -1
        } else if (ball.x < 0) {
            spillbrett.poeng2 += 1
            ball = new Ball((spillbrett.bredde / 2) - 12, (spillbrett.høyde / 2) - 12)
        } else if (ball.x > spillbrett.bredde + ball.side) {
            spillbrett.poeng1 += 1
            ball = new Ball((spillbrett.bredde / 2) - 12, (spillbrett.høyde / 2) - 12)
        }
    }

    function sjekkKollisjonPadde() {
        if (ball.x < padde1.x + padde1.bredde &&
            ball.y > padde1.y - ball.side &&
            ball.y < padde1.y + padde1.høyde &&
            ball.x > padde1.x) {
                ball.vx *= -1
        } else if (ball.x + ball.side > padde2.x &&
            ball.y > padde2.y - ball.side &&
            ball.y < padde2.y + padde2.høyde &&
            ball.x + ball.side < padde2.x + padde2.bredde) {
                ball.vx *= -1
        }
    }

</script>

<h1>Oppgave 8</h1>

<div class="innhold">
    <canvas bind:this={canvas} height={spillbrett.høyde} width={spillbrett.bredde} />
</div>

<svelte:window on:keydown|preventDefault={(e) => handleKeyDown(e)}></svelte:window>
<style>
    .innhold {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>