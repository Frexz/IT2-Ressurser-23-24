<script>
    let funksjonsverdier = []

    function f(x) {
        return 4*x**2 - 2
    }

    function fyllArray() {
        for (let i = -3; i < 4; i++) {
            funksjonsverdier.push(f(i))
        }
    }

    fyllArray()

</script>

<h2>f(x) = 4x<sup>2</sup> - 2</h2>

<table>
    <tr>
        <td style="background-color: lightgreen;" width="75px;">x</td>
        {#each funksjonsverdier as f, i}
            <td>{i - 3}</td>
        {/each}
    </tr>

    <tr>
        <td style="background-color: lightgreen;">f(x)</td>
        {#each funksjonsverdier as f}
            <td>{f}</td>
        {/each}
    </tr>
</table>

<style>
    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
        padding: 10px;
    }
</style>