<script>
    let kapittel = 1
    let antallDelkapitler = 8
    let delkapitler = []

    for (let i = 1; i < antallDelkapitler + 1; i++) {
        delkapitler.push(kapittel.toString() + "." + i.toString())
    }

</script>

<h1>Kapittel {kapittel}</h1>
<h2>Delkapitler</h2>

<ul>
    {#each delkapitler as num}
        <li>
            <a href="kapittel{kapittel}/{num}">{num}</a>
        </li>
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