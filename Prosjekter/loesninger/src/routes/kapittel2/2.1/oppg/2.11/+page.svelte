<script>
    import { lagDNAtråd, lagKompDNA, lagmRNA } from "../../../../../../../gjenbruk/mineFunksjoner"

    let n = 0
    let DNA_tråd = ""
    let kompDNA_tråd = ""
    let mRNA_tråd = ""

    function håndterKlikk() {
        DNA_tråd = lagDNAtråd(n)
        kompDNA_tråd = lagKompDNA(DNA_tråd)
        mRNA_tråd = lagmRNA(DNA_tråd)
    }
</script>

<p>Oppgi antall nitrogenbaser til DNA-tråden</p>
<input type="number" bind:value={n}>
<button on:click={håndterKlikk}>Lag mRNA</button>
<p>{kompDNA_tråd}</p>
<p>{DNA_tråd}</p>
<p>{mRNA_tråd}</p>


<style>
    button {
        margin-top: 10px;
    }
</style>