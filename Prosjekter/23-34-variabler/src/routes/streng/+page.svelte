<script>
    let navn = ["Fredrik", "Bjørnar", "Truls", "Kjell"]
    let kuttede = navn.pop()
</script>

<!-- <button on:click={() => {resultat = navn.slice(4)}}>Klikk</button> -->

{#each navn as n, i}
    <p>{n} er på indeks {i}</p>
{/each}

{kuttede}


<style>
    
</style>