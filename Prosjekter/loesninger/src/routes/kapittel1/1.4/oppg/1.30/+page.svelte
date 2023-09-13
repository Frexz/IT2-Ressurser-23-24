<script>
    let farge

    $: {
        console.log(typeof farge)
    }
</script>

<!-- I denne koden er input-boksen av typen color, altså en fargevelger. Verdien er en HEX-kode av typen string.
En HEX-kode er en streng som starter med symbolet # etterfulgt av 6 siffer fra hexadesimalsystemet, altså sifrene 
0-9 og bokstavene a-f. F.eks #fa0000 representerer fargen rød -->
<input type="color" bind:value={farge}>
<h1 style="color: {farge}">Hva gjør denne koden?</h1>

<style>
    
</style>