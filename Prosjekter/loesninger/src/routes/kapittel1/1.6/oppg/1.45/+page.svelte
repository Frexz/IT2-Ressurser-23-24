<script>
    let tall = []
    let a
    let sum = 0
    let gjennomsnitt = 0

    function leggTilTall() {
        tall.push(a)

        sum += a
        gjennomsnitt = sum / tall.length

        tall = tall
    }

</script>

<div class="brukerinput">
    <input type="number" placeholder="Skriv inn et tall" bind:value={a}>
    <button on:click={leggTilTall}>Klikk for å legge til</button>
</div>

<p><b>Vilkårlige tall:</b></p> 
{#each tall as t}
    {t}{" "}
{/each}

<p><b>Sum:</b> {sum}</p>
<p><b>Gjennomsnitt:</b> {gjennomsnitt}</p>

<style>
    .brukerinput {
        display: flex;
        margin-bottom: 20px;
    }

    input {
        margin-right: 10px;
    }
</style>