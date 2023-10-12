<script>
    let navn
</script>

<div class="brukerinput">
    <h3>Skriv navnet på en venn her</h3>
    <input type="text" bind:value={navn}>
</div>

<div class="hilsen">
    {#if navn}
        <h1>Hei på deg, {navn}!</h1>
    {/if}
</div>

<style>
    h3 {
        margin: 0;
    }

    .brukerinput {
        display: flex;
        column-gap: 10px;
    }

    .hilsen {
        height: 100px;
    }
</style>