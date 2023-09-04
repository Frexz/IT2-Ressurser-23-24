<script>
    let idag = new Date()
    let ukedag = idag.getDay()
    let måned = idag.getMonth()

    let visKlokkeslett = false

    let ukedager = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
    let måneder = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "Septemeber", "Oktober", "November", "Desember"]
</script>

<div class="klokke">
    <button on:click={() => {
        idag = new Date()
        visKlokkeslett = !visKlokkeslett
    }}>Vis dato og klokkeslett</button>

    {#if visKlokkeslett}
        <h2>Klokka er {idag.getHours()}:{idag.getMinutes()}</h2>
        <h2>{ukedager[ukedag]} {idag.getDate()}. {måneder[måned - 1]} {idag.getFullYear()}</h2>
    {/if}
</div>

<div class="innhold">
    <div class="ukedager">
        {#each ukedager as dag, i}
            {#if i == ukedag}
                <p style="color: red;">{dag}</p>
            {:else}
                <p>{dag}</p>
            {/if}
        {/each}
    </div>
    <div class="maaneder">
        {#each måneder as m, i}
            {#if i === måned}
                <p style="color: red;">{m}</p>
            {:else}
                <p>{m}</p>
            {/if}
        {/each}
    </div>
</div>


<style>
    .innhold {
        display: flex;
    }

    .ukedager {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 100px;
    }

    .maaneder {
        display: flex;
        flex-direction: column;
    }

    .klokke {
        margin-bottom: 50px;
    }

    h2 {
        color:dodgerblue;
    }
</style>