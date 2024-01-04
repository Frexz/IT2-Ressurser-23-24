<script>
    import { onMount } from 'svelte'

    class Spill {
        constructor(bredde, hoyde) {
            this.bredde = bredde
            this.hoyde = hoyde
        }
    }

    class Ball {
        constructor(x, y, side) {
            this.x = x
            this.y = y
            this.vx = Math.random() < 0.5 ? 1 : -1
            this.vy = 1
            this.side = side
        }

        move() {
            this.x += 3*this.vx
            this.y += 3*this.vy
        }
    }

    class Padde {
        constructor(bredde, hoyde, spill) {
            this.bredde = bredde
            this.hoyde = hoyde
            this.x = spill.bredde/2 - this.bredde/2
            this.y = spill.hoyde - 2*this.hoyde
        }
    }

    let spill = new Spill(450, 550)
    let padde = new Padde(120, 25, spill)
    let baller = [new Ball(50, 50, padde.hoyde)]

    let canvas
    let ctx
    let id
    let gameOver = false
    
    onMount(() => {
        ctx = canvas.getContext("2d")
        id = requestAnimationFrame(() => update(ctx))
    })

    /* Denne funksjonen tegner og animerer. */
    function update(ctx) {
        /* Spillvindu */
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, spill.bredde, spill.hoyde)

        /* Padde */
        ctx.fillStyle = "cornflowerblue"
        ctx.fillRect(padde.x, padde.y, padde.bredde, padde.hoyde)

        for (const b of baller) {
            sjekkKollisjonVegg(b)
            sjekkKollisjonPadde(b)
            b.move()

            /* Ball */
            ctx.fillStyle = "magenta"
            ctx.fillRect(b.x, b.y, b.side, b.side)
        }

        id = requestAnimationFrame(() => update(ctx))
    
    }

    function bevegPadde(e) {
        let knapp = e.key

        if (knapp == "ArrowLeft") {
            padde.x -= 20
            if (padde.x < 0) {
                padde.x = 0
            }
        } else if (knapp == "ArrowRight") {
            padde.x += 20
            if (padde.x > spill.bredde - padde.bredde) {
                padde.x = spill.bredde - padde.bredde
            }
        }
    }

    function sjekkKollisjonVegg(ball) {
        /* Høyre side */
        if (ball.x > spill.bredde - ball.side) {
            ball.vx = -1
        } 

        /* Nederst */
        if (ball.y > spill.hoyde - ball.side) {
            gameOver = true
        }

        /* Venstre side */
        if (ball.x < 0) {
            ball.vx = 1
        }

        /* Øverst */
        if (ball.y < 0) {
            ball.vy = 1
        }
        
    }

    function sjekkKollisjonPadde(ball) {
        if (
            ball.y > padde.y - ball.side &&
            ball.x >= padde.x - ball.side &&
            ball.x <= padde.x + padde.bredde &&
            ball.y < padde.y + 1
            ) {
            ball.vy *= -1
            baller.push(new Ball(50, 50, padde.hoyde))
        }
    }


</script>

<div class="innhold">
    {#if gameOver}
        <h1 style="color: red;">GAME OVER</h1>
    {:else}
        <canvas bind:this={canvas} height={spill.hoyde} width={spill.bredde} />
    {/if}
    
</div>

<svelte:window on:keydown|preventDefault={(e) => bevegPadde(e)}/>

<style>
    .innhold {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>