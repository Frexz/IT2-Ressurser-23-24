<script>
    import land from '$lib/land.json'

</script>

<a href="/pølsespising">Pølsespising</a>

<div class="innhold">
    {#each land as l}
        <div class="land">
            <h1>{l.navn}</h1>
            <p>Hovedstad: {l.hovedstad}</p>
            <p>Folketall: {l.folketall} millioner</p>
            <p>Areal: {l.areal} km<sup>2</sup></p>
            <img src={l.flagg} alt="" width="100px">
        </div>
    {/each}
</div>

<style>
    .innhold {
        display: flex;
        align-items: center;
        flex-direction: row;
        column-gap: 100px;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }

    .land {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>