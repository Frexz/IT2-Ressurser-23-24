<script>
    let fornavn = ["Isaac", "Albert", "Niels", "Marie", "Ernest", "Galileo", "Michael", "Ada", "Alan", "Erwin"]
    let etternavn = ["Newton", "Einstein", "Bohr", "Curie", "Rutherford", "Galilei", "Faraday", "Lovelace", "Turing", "Schrödinger"]
</script>

<ol>
    {#each fornavn as f, i}
        <li>{f} {etternavn[i]}</li>
    {/each}
</ol>

<style>
    
</style>