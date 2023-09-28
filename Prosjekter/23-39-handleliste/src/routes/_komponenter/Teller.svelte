<script>
    export let tall = 0

    $: {
        if (tall < 0) {
            tall = 0
        }
    }
</script>

<div class="teller">
    <button on:click={() => tall--}>-</button>
    <p>{tall}</p>
    <button on:click={() => tall++}>+</button>
</div>

<style>
    button {
        height: 20px;
    }
    .teller {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 10px;
    }
</style>