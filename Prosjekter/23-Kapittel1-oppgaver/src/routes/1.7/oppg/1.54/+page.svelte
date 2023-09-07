<script>
    let vises = false
</script>

<button on:click={() => {vises = !vises}}>{vises ? "Skjul" : "Vis"}</button>

{#if vises}
    <div class="boks"><h1>I SEE YOU</h1></div>
{/if}

<style>
    button {
        position: fixed;
        top: 40vh;
        left: 40vw;
    }

    h1 {
        color: #FFBB5C;
        -webkit-text-stroke: 1px rgb(38, 24, 24);
    }

    .boks {
        align-items: center;
        background-color: #FF9B50;
        border: 10px solid #C63D2F;
        border-radius: 50%;
        display: flex;
        height: 200px;
        justify-content: center;
        width: 200px;
    }
</style>