<script>
    import { page } from '$app/stores'
    let kapittel = 6
    let delkapittel = $page.url.pathname.slice(-3)
    let oppgaver = []
    let antall =  2
    let start = 13

    for (let i = start; i < start + antall; i++) {
        i < 10 ? oppgaver.push("0" + i.toString()) : oppgaver.push(i.toString())
    }

</script>

<h1>Delkapittel {delkapittel}</h1>
<h2>Oppgaver</h2>

<ul>
    {#each oppgaver as num}
        <li>
            <a href="{delkapittel}/oppg/{kapittel}.{num}">{kapittel}.{num}</a>
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