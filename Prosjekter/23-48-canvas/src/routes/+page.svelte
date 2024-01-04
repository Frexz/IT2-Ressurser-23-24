<script>
    import { onMount } from 'svelte'

    class Rektangel {
        constructor(bredde, hoyde, farge) {
            this.farge = this.generateColor()
            this.bredde = bredde
            this.hoyde = hoyde
            this.x = Math.floor((WIDTH - this.bredde)*Math.random())
            this.y = Math.floor((HEIGHT - this.hoyde)*Math.random())
            this.vx = Math.random() < 0.5 ? 1: -1
            this.vy = Math.random() < 0.5 ? 1: -1
        }

        move() {
            this.x += 1 * this.vx
            this.y += 1 * this.vy
        }

        generateColor() {
            let red = Math.floor(256*Math.random())
            let green = Math.floor(256*Math.random())
            let blue = Math.floor(256*Math.random())

            return "#" + red.toString(16) + green.toString(16) + blue.toString(16)
        }
    }
    const WIDTH = 800
    const HEIGHT = 500

    let canvas
    let ctx
    let animationId

    let rectangles = [new Rektangel(25, 25)]
    

    onMount(() => {
        ctx = canvas.getContext("2d")
        animationId = requestAnimationFrame(() => update(ctx))
    })

    function update(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, WIDTH, HEIGHT)

        for (let i = 0; i < rectangles.length; i++) {
            checkEdgeCollision(rectangles[i])
            checkCollision(rectangles[i])
            rectangles[i].move()

            ctx.fillStyle = rectangles[i].farge
            ctx.fillRect(rectangles[i].x, rectangles[i].y, rectangles[i].bredde, rectangles[i].hoyde)
        }

        animationId = requestAnimationFrame(() => update(ctx))
    }

    function checkEdgeCollision(r) {
        if (r.y >= HEIGHT - r.hoyde) {
            r.vy = -1
        }

        if (r.x >= WIDTH - r.bredde) {
            r.vx = -1
        }

        if (r.y <= 0) {
            r.vy = 1
        }

        if (r.x <= 0) {
            r.vx = 1
        }
    }

    function checkCollision(r) { 
        for (let i = 0; i < rectangles.length; i++) {
            if (r == rectangles[i]) {
                continue
            }

            let other = rectangles[i]

            if (
                !(r.x + r.bredde < other.x ||
                r.x > other.x + other.bredde ||
                r.y > other.y + other.hoyde ||
                r.y + r.hoyde < other.y) 
                ) {
                    r.vx *= -1
                    r.vy *= -1
                    other.vx *= -1
                    other.vy *= -1
            }
        }
    }

    function addRectangle() {
        rectangles.push(new Rektangel(25, 25, "cornflowerblue"))
    }

</script>

<div class="innhold">
    <canvas bind:this={canvas} height={HEIGHT} width={WIDTH} />
    <button style="margin-top: 10px;" on:click={addRectangle}>ONE MOAR</button>
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