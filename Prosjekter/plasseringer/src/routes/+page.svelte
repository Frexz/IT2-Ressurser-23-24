<script>
    let canvas
    let ctx = canvas.getContext("2d")
</script>

<div class="innhold">
    <canvas bind:this={canvas}>
        

    </canvas>
</div>

<style>
    canvas {
        background-color: lightgrey;
        height: 600px;
        width: 1200px;
    }

    .innhold {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>