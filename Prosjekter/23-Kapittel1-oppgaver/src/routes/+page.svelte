<script>
    let delkapitler = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8"]
</script>

<h1>Oppgaver - Kapittel 1 - Løsningsforslag</h1>

<ul>
    {#each delkapitler as num}
        <li>
            <a href="/{num}">{num}</a>
        </li>
    {/each}
</ul>

<style>
    ul {
        display: flex;
        list-style: none;
    }

    li {
        font-size: 20px;
        margin: 0 10px;
    }
</style>