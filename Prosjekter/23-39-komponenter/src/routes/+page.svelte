<script>
    import Terning from "./_komponenter/Terning.svelte";  

    let liste = [1, 2, 3, 4, 5]
    let kastAlle = false
</script>

<div class="innhold">
    <div class="terninger">
        {#each liste as a}
            <Terning bind:kastAlle />
        {/each}
    </div>
    <button on:click={() => kastAlle = true}>Kast alle terningene</button>
</div>

<style>
    button {
        height: 50px;
        margin-top: 30px;
        width: 650px;
    }

    .terninger {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .innhold {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }
</style>