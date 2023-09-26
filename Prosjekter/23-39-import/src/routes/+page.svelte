<script>
    import { kastValgtTerning } from "../../../gjenbruk/myFunctions"
    

    let antallSider = 0
    let tilfeldigTall = kastValgtTerning(antallSider)


</script>

<h1>{tilfeldigTall}</h1>
<input type="number" min=0 increment=1 bind:value={antallSider}>
<button on:click={() => tilfeldigTall = kastValgtTerning(antallSider)}>Kast terning</button>

<style>
    
</style>