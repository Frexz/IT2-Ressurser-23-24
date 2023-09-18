<script>
    let antallSkritt = 0

    function plussEn() {
        antallSkritt++
    }

    function minusTo() {
        antallSkritt -= 2
    }

</script>

<h1>Funksjoner</h1>
<p>En funksjon kan defineres på flere måter. Den foretrukne måten er slik: <code>function minFunksjon(parameter1, parameter2, ...) &#123&#125</code><br>
der <code>function</code> er et nøkkelord for funksjoner etterfulgt av navn på funksjonen. Funksjonen trenger ikke ha parametere, men kan ha. Funksjonen <br>
skrives så inni krøllparentesene. Funksjonsdefinisjonen må gjøres i <code>&lt;script&gt;</code>-delen av Svelte-prosjektet, men kan kalles på i både script og HTML.</p>

<h2>{antallSkritt}</h2>

<div class="knapper">
    <button on:click={plussEn}>Ett skritt frem</button>
    <button on:click={minusTo}>To skritt tilbake</button>
</div>

<style>
    
</style>