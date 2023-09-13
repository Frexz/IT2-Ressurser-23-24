<script>
    let a
    let b
    let c  
    $: gjsnitt = (a + b + c) / 3
    $: max = Math.max(a, b, c)
    $: min = Math.min(a, b, c)  
</script>

<div class="innhold">
    <input type="number" placeholder="Skriv inn tall a" bind:value={a}>
    <input type="number" placeholder="Skriv inn tall b" bind:value={b}>
    <input type="number" placeholder="Skriv inn tall c" bind:value={c}>
    <h3>Gjennomsnittet av tallene a, b og c er {gjsnitt.toFixed(2)}.</h3>
    <h3>Det største inntastede tallet er {max} og det minste er {min}.</h3>
</div>

<style>
    .innhold {
        display: flex;
        flex-direction: column;
    }

    input {
        margin: 10px;
    }
</style>