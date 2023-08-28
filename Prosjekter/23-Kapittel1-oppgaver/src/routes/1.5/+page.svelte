<script>
    let delkapittel = window.location.pathname.slice(-3)
    let oppgaver = []
    let antall =  7
    let start = 34

    for (let i = start; i < start + antall; i++) {
        i < 10 ? oppgaver.push("0" + i.toString()) : oppgaver.push(i.toString())
    }

</script>

<h1>Delkapittel {delkapittel}</h1>

<ul>
    {#each oppgaver as num}
        <li>
            <a href="/{delkapittel}/oppg/1.{num}">1.{num}</a>
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