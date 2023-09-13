<script>
    let kapitler = [1, 2, 3, 4, 5, 6]
</script>

<h1>Kode 2 - Løsningsforslag</h1>
<h2>Kapitler</h2>

<ul>
    {#each kapitler as k}
        <li><a href="kapittel{k}">Kapittel {k}</a></li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
    }

    li {
        font-size: 20px;
        margin-bottom: 20px;
    }
</style>