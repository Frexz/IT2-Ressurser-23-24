<script>
    let minste = 0
    let storste = 0
    let deleligMed = 1
    $: delelige = finnTallene(minste, storste, deleligMed)

    function finnTallene(minste, storste, deleligMed) {
        let delelige = []

        for (let i = minste; i < storste + 1; i++) {
            if (i % deleligMed == 0) {
                delelige.push(i)
            }
        }
        
        return delelige
    }
</script>

<p style="color: red;">Dette programmet finner alle tallene innenfor et intervall som er delelige med et gitt tall.</p>
<label for="">Det minste tallet: </label><input type="number" bind:value={minste}>
<label for="">Det største tallet: </label><input type="number" bind:value={storste}>
<label for="">Delelig med: </label><input type="number" bind:value={deleligMed}>

<h3 style="color: purple;">Det er {delelige.length} tall mellom {minste} og {storste} som er delelige med {deleligMed}:</h3>
<div class="tall">
    <h3 style="color: purple;">
        {#each delelige as tall}
            {tall}, 
        {/each}
    </h3>
</div>


<style>
    
</style>