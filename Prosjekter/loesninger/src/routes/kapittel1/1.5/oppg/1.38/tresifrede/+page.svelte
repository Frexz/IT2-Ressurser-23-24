<script>
    let tall = []
    let koder = []

    for (let i = 0; i < 10; i++) {
        tall.push(i.toString())
    }

    for (let i = 0; i < tall.length; i++) {
        for (let j = 0; j < tall.length; j++) {
            for (let k = 0; k < tall.length; k++) {
                let kode = tall[i] + tall[j] + tall[k]
                koder.push(kode)
            }
        }
    }
</script>

<div class="koder">
    {#each koder as kode}
        <p>{kode}</p>
    {/each}
</div>

<style>
    p {
        margin-right: 10px;
    }

    .koder {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 200px;
    }
</style>