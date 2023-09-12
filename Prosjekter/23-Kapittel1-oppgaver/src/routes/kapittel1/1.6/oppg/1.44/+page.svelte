<script>
    let tall1
    let tall2
    let sum
    let differanse
    let gjennomsnitt

    function pluss(a, b) {
        return a + b
    }

    function minus(a, b) {
        return a - b
    }

    function gjsnitt(a, b) {
        return pluss(a, b) / 2
    }

    function regnUt() {
        sum = pluss(tall1, tall2)
        differanse = minus(tall1, tall2)
        gjennomsnitt = gjsnitt(tall1, tall2)
    }

</script>

<h1>Sum, differanse og gjennomsnitt</h1>

<div class="tall">
    <input type="number" placeholder="Skriv inn et tall"m bind:value={tall1}>
    <input type="number" placeholder="Skriv inn et tall" bind:value={tall2}>
</div>

<button on:click={regnUt}>Regn ut</button>
<p>Sum: {sum} Differanse: {differanse} Gjennomsnitt: {gjennomsnitt}</p>

<style>
    .tall {
        margin-bottom: 10px;
    }
</style>