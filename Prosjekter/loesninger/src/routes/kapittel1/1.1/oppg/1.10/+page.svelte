<script>
    let fornavn = "Fredrik"
    let etternavn = "Pettersen"
</script>

<label for="">Fornavn:</label>
<input type="text" bind:value={fornavn}>
<label for="">Etternavn:</label>
<input type="text" bind:value={etternavn}>
<h1>{fornavn} {etternavn}</h1>

<style>
    input {
        width: 150px; /* Endrer bredden på input-boksen */
        height: 40px; /* Endrer høyden på input-boksen */
        margin: 5px; /* Lager et område rundt input-boksen der andre elementer ikke kan være */
        padding: 20px; /* Innholdet i input-boksen er 20px fra kantene */
        font-size: 20px; /* Endrer tekst-størrelse */
        border: 2px dashed pink; /* Endrer rammen rundt til streker og rosa */
        border-radius: 10px; /* Runder av hjørnene på rammen */
    }
</style>