<script>
    let ringenesHerreNavn = ["Gimli", "Legolas", "Sam", "Treebeard", "Saruman"]
    
    ringenesHerreNavn.sort((a, b) => a.length - b.length)

</script>

<ul>
    {#each ringenesHerreNavn as navn}
        <li>{navn}</li>
    {/each}
</ul>

<style>
    
</style>