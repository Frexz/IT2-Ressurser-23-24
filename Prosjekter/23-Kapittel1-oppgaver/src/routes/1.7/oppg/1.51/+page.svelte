<script>
    let antallBokstaver = Math.ceil(10*Math.random())
    let ord = ""
</script>

<p>Skriv inn et ord som består av {antallBokstaver} bokstaver</p>
<input type="text" bind:value={ord}>

{#if ord.length == antallBokstaver}
    <h2>Bra! &#x1F44D; Du kan telle.</h2>
{:else if ord.length != antallBokstaver && ord.length > 0}
    <h2>Nei! &#x1F44E; Prøv igjen.</h2>
{/if}

<style>
    
</style>