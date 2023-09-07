<script>
    let spiller1 = ""
    let spiller2 = ""
    let vinnerPoeng = 0
    let resultat1 = 0
    let resultat2 = 0
    let sum1 = 0
    let sum2 = 0
    let harStartet = false

    function rullTerning(spiller) {
        if (spiller == "spiller1") {
            resultat1 = Math.floor(6*Math.random() + 1)
            sum1 += resultat1
        } else if (spiller == "spiller2") {
            resultat2 = Math.floor(6*Math.random() + 1)
            sum2 += resultat2
        }
    }

    function nullstill() {
        resultat1 = 0
        resultat2 = 0
        sum1 = 0
        sum2 = 0
    }
</script>

{#if !harStartet}
    <h3>Skriv inn navn på spiller 1</h3>
    <input type="text" bind:value={spiller1}>
    <h3>Skriv inn navn på spiller 2</h3>
    <input type="text" bind:value={spiller2}>
    <h3>Velg hvor mange poeng man trenger for å vinne</h3>
    <input type="number" bind:value={vinnerPoeng}>
    <button on:click={() => {harStartet = true}}>Start spill</button>
{:else}
    <div class="knapper">
        <button class="nullstill" on:click={nullstill}>Nullstill</button>
        <button id="spiller1" on:click={(e) => {rullTerning(e.target.id)}}>Kast terning for {spiller1}</button>
        <button id="spiller2" on:click={(e) => {rullTerning(e.target.id)}}>Kast terning for {spiller2}</button>
    </div>

    {#if resultat1 > 0}
        <h3 class="spiller1">{spiller1}: Du fikk en {resultat1}-er og har totalt {sum1} poeng</h3>
    {/if}

    {#if resultat2 > 0}
        <h3 class="spiller2">{spiller2}: Du fikk en {resultat2}-er og har totalt {sum2} poeng</h3>
    {/if}


    {#if sum1 >= vinnerPoeng}
        <h3 class="spiller1">Spiller 1 vant!</h3>
    {:else if sum2 >= vinnerPoeng}
        <h3 class="spiller2">Spiller 2 vant!</h3>
    {/if}
{/if}

<style>
    button {
        border: 2px solid #FFE5E5;
    }

    input {
        margin: 10px;
    }

    .nullstill {
        background-color: #A8DF8E;
    }

    .spiller1 {
        color:#c2dba6;
    }

    .spiller2 {
        color:#FFBFBF;
    }

    #spiller1 {
        background-color: #c2dba6;
    }

    #spiller2 {
        background-color: #FFBFBF;
    }
</style>