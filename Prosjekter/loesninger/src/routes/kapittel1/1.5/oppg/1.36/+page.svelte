<script>
    let filmer = [
        "Ringenes Herre: Ringens Brorskap",
        "Ringenes Herre: To Tårn",
        "Ringenes Herre: Atter En Konge",
        "Interstellar",
        "The Matrix"
    ]
</script>

<div class="innhold">
    <div class="alfabetisk">
        <h1>Alfabetisk</h1>
        {#each filmer.sort() as film}
            <p>{film}</p>
        {/each}
    </div>

    <div class="omvendt">
        <h1>Omvendt alfabetisk</h1>
        {#each filmer.sort().reverse() as film}
            <p>{film}</p>
        {/each}
    </div>
</div>

<style>
    .alfabetisk {
        margin-right: 100px;
    }

    .innhold {
        display: flex;
    }
</style>