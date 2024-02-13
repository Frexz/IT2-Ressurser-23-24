<script>
    import { onMount } from 'svelte'

    let RUTELENGDE = 25
    let KOLONNER = 40
    let RADER = 20
    let BREDDE = RUTELENGDE * KOLONNER
    let HOYDE = RUTELENGDE * RADER
    
    class SpillObjekt {
        constructor(x, y, farge) {
            this.x = x
            this.y = y
            this.farge = farge
        }
    }

    class Troll extends SpillObjekt{
        constructor(x, y, farge) {
            super(x, y, farge)
            this.vx = 0
            this.vy = 0
        }

        move() {
            this.x += this.vx * RUTELENGDE
            this.y += this.vy * RUTELENGDE
        }

    }

    class Mat extends SpillObjekt{
        constructor(x, y, farge) {
            super(x, y, farge)

            while (this.sjekkSammePosisjon()) {
                this.x = RUTELENGDE * Math.floor(KOLONNER*Math.random())
                this.y = RUTELENGDE * Math.floor(RADER*Math.random())
            }
        }

        sjekkSammePosisjon() {
            for (const element of elementer) {
                if (this.x == element.x && this.y == element.y) {
                    return true
                }
            }

            return false
        }
    }

    class Hindring extends SpillObjekt{
        constructor(x, y, farge) {
            super(x, y, farge)
        }
    }

    let canvas
    let ctx
    let id
    let dt = 150

    let poeng = 0
    let gameOver = false
    let troll = new Troll(RUTELENGDE*19, RUTELENGDE*10, "lime")
    let elementer = [troll]

    for (let i = 0; i < 3; i++) {
        elementer.push(new Mat(
            RUTELENGDE * Math.floor(KOLONNER*Math.random()),
            RUTELENGDE * Math.floor(RADER*Math.random()),
            "yellow"
        ))
    }

    
    onMount(() => {
        ctx = canvas.getContext("2d")
        id = setInterval(() => update(ctx), dt)
    })

    function update(ctx) {
        console.log("Ny Runde")
        console.log(elementer)
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, BREDDE, HOYDE)

        for (const element of elementer) {
            ctx.fillStyle = element.farge
            ctx.fillRect(element.x, element.y, RUTELENGDE, RUTELENGDE)
        }

        ctx.fillStyle = "coral"
        ctx.font = "20px Times New Roman"
        ctx.fillText(`Poeng: ${poeng}`, 20, 20)

        troll.move()
        sjekkKollisjon()
        sjekkVegg()

        if (gameOver) {
            ctx.fillStyle = "red"
            ctx.font = "40px Comic Sans"
            ctx.fillText("GAME OVER!", BREDDE/2 - RUTELENGDE*5, HOYDE/2)
        }
    }

    function handleKeydown(e) {
        if (e.key == "w") {
            troll.vx = 0
            troll.vy = -1
        } else if ( e.key == "s") {
            troll.vx = 0
            troll.vy = 1
        } else if (e.key == "a") {
            troll.vx = -1
            troll.vy = 0
        } else if (e.key == "d") {
            troll.vx = 1
            troll.vy = 0
        }
    }

    function sjekkVegg() {
        if (troll.y < 0 || troll.x >= BREDDE || troll.y >= HOYDE || troll.x < 0) {
            gameOver = true
            clearInterval(id)
        }
    }

    function sjekkKollisjon() {
        for (let i = 1; i < elementer.length; i++) {
            if (elementer[i] instanceof Mat && troll.x == elementer[i].x && troll.y == elementer[i].y) {
                spisMat(elementer[i])
                return
            } else if (elementer[i] instanceof Hindring && troll.x == elementer[i].x && troll.y == elementer[i].y) {
                clearInterval(id)
                gameOver = true
                return
            }
        }
    }

    function spisMat(matbit) {
        poeng++

        elementer = elementer.filter((mat) => mat != matbit)
        elementer.push(new Hindring(matbit.x, matbit.y, "grey"))
        elementer.push(new Mat(
            RUTELENGDE * Math.floor(KOLONNER*Math.random()),
            RUTELENGDE * Math.floor(RADER*Math.random()),
            "yellow"
        ))
        dt -= 5
        clearInterval(id)
        id = setInterval(() => update(ctx), dt)
    }


</script>

<div class="innhold">
    <canvas bind:this={canvas} height={HOYDE} width={BREDDE} />
</div>

<svelte:window on:keydown|preventDefault={(e) => handleKeydown(e)}/>

<style>
    .innhold {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>