<script>
    let svarRegnestykke
    let svarQuiz
    let svartRegnestykke = false
    let svartQuiz = false

    function sjekkRegnestykke(svar) {
        if (svar == 120) {
            return true
        } else {
            return false
        }
    }

    function sjekkQuiz(svar) {
        if (svar == "Canberra") {
            return true
        } else {
            return false
        }
    }

</script>

<h1>Hva er 5!?</h1>
<div class="regnestykke">
    <input type="number" bind:value={svarRegnestykke}>
    <button on:click={() => {svartRegnestykke = true}}>Sjekk svar</button>
    {#if svartRegnestykke == false}
        <p>Venter på svar...</p>
    {:else if sjekkRegnestykke(svarRegnestykke)}
        <p style="color:green;">Du svarte riktig!</p>
    {:else}
        <p style="color:red;">Du svarte feil!</p>
    {/if}
</div>

<h1>Hva heter hovedstaden i Australia?</h1>
<div class="quiz">
    <input type="text" bind:value={svarQuiz}>
    <button on:click={() => {svartQuiz = true}}>Sjekk svar</button>
    {#if svartQuiz == false}
        <p>Venter på svar...</p>
    {:else if sjekkQuiz(svarQuiz)}
        <p style="color:green;">Du svarte riktig!</p>
    {:else}
        <p style="color:red;">Du svarte feil!</p>
    {/if}
</div>

<style>
    .regnestykke {
        margin-bottom: 50px;
    }
</style>