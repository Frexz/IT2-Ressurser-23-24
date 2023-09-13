<script>
   
    let person = {
        "fornavn": "Fredrik",
        "etternavn": "Pettersen",
        "fødselsår": 1992,
        "høyde": 187
    }

    console.log(Object.entries(person))
</script>

{#each Object.entries(person) as p}
    {p} <br>
{/each}

<style>
    
</style>