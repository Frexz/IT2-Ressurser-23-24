<script>
    let antallRader = 10
    let antallKolonner = 10
    let vises = true
    let tabell

    $: {
        tabell = lagTabell(antallRader, antallKolonner)
    }

    function lagTabell(r, k) {
        let tabell = []
        for (let i = 0; i < r; i++) {
            let rad = []
            for (let j = 0; j < antallKolonner; j++) {
                rad.push((i + 1)*(j + 1))
            }
            tabell.push(rad)
        }
        return tabell
    }
</script>

<label for="">Antall rader: </label><input type="number" bind:value={antallRader}>
<label for="">Antall kolonner: </label><input type="number" bind:value={antallKolonner}>

<div class="knapper">
    <button style="background-color: khaki;" on:click={() => {vises = true}}>VIS TABELL</button>
    <button style="background-color:cornflowerblue;" on:click={() => {vises = false}}>SKJUL TABELL</button>
</div>

{#if vises}
    <table>
        {#each tabell as rad}
            <tr>
                {#each rad as nummer}
                    <td>{nummer}</td>
                {/each}
            </tr>
        {/each}
    </table>
{/if}



<style>
    button {
        height: 40px;
        width: 150px;
    }

    input {
        margin-bottom: 20px;
    }

    td {
        background-color: khaki;
        border: 1px solid black;
        padding: 10px;
    }

    .knapper {
        margin-bottom: 20px;
    }
</style>