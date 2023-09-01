<script>
    let valuta = [
        ["Norge", "krone", "NOK", 1],
        ["USA", "dollar", "USD", 10.61],
        ["Storbritannia", "pund", "GBP", 13.45],
        ["Spania", "euro", "EUR", 11.51]
    ]
</script>

<h1 style="color: darkgoldenrod;">Valuta</h1>
<ul>
    {#each valuta as v}
        <li><span style="color: forestgreen;">{v[0] + "s"}</span> valuta heter <span style="color: red;">{v[1]}</span>. 1 {v[2]} = {v[3]} NOK</li>
    {/each}
</ul>

<style>
    ul {
        list-style: disc;
    }
</style>