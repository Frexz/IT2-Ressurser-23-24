<script>
    let bakgrunn = "purple"
</script>

<input type="color" bind:value={bakgrunn}>

<div class="bokser" style="--bakgrunnsFarge: {bakgrunn};">
    <div class="boks1">
        <h1>CSS</h1>
    </div>

    <div class="boks2">
        <h1>-</h1>
    </div>

    <div class="boks3">
        <h1>variabler</h1>
    </div>
</div>    

<style>

    .bokser {
        align-items: center;
        display: flex;
        height: 100vh;
        justify-content: center;
        width: 100vw;
    }

    .boks1, .boks2, .boks3 {
        align-items: center;
        background-color: var(--bakgrunnsFarge);
        display: flex;
        height: 100px;
        justify-content: center;
        margin: 0 50px;
        width: 300px;
    }

    h1 {
        color: var(--tekstFarge);
        font-size: 50px;
    }

</style>