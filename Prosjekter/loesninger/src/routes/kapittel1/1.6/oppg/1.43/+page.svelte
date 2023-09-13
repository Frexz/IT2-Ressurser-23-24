<script>
    let lengdeCm = 0
    let lengdeTommer = 0
    let melding = ""

    function cmTilTommer() {
        lengdeTommer = lengdeCm * 2.54
        melding = `${lengdeCm} cm er ${lengdeTommer} tommer.`
    }

</script>

<h1>Omgjøring fra centimeter til tommer</h1>
<div class="omgjøring">
    <input type="number" placeholder="Oppgi lengde i cm" bind:value={lengdeCm}>
    <button on:click={cmTilTommer}>Gjør om</button>
</div>
<p>{melding}</p>

<style>
    
</style>