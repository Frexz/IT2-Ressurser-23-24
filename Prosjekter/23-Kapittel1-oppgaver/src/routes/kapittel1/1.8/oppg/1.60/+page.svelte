<script>
    let lag1 = {
        "navn": "Bodø/Glimt",
        "vinn": 3,
        "uavgjort": 1,
        "tap": 1
    }

    let lag2 = {
        "navn": "Viking",
        "vinn": 4,
        "uavgjort": 1,
        "tap": 0
    }

    let lag = [lag1, lag2]
</script>

<div class="lag">
    {#each lag as l}
        <div class="info">
            <p>Lagnavn: {l["navn"]}</p>
            <p>Vunnet: {l["vinn"]}</p>
            <p>Uavgjort: {l["uavgjort"]}</p>
            <p>Tap: {l["tap"]}</p>
        </div>
    {/each}
</div>

<h3 style="color: purple;">{lag1["vinn"] > lag2["vinn"] ? lag1["navn"] : lag2["navn"]} har vunnet flest kamper.</h3>

<style>
    .lag {
        display: flex;
    }

    .info {
        margin: 50px;
    }

</style>