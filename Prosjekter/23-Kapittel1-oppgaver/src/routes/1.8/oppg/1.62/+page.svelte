<script>
    /* Tall fra SSB: https://www.ssb.no/befolkning/faktaside/befolkningen */
    let befolkning = [
        {"år": 2014, "folketall": 5109056},
        {"år": 2015, "folketall": 5165802},
        {"år": 2016, "folketall": 5213985},
        {"år": 2017, "folketall": 5258317},
        {"år": 2018, "folketall": 5295619},
        {"år": 2019, "folketall": 5328212},
        {"år": 2020, "folketall": 5367580},
        {"år": 2021, "folketall": 5391369},
        {"år": 2022, "folketall": 5425270},
        {"år": 2023, "folketall": 5488984},
    ]
</script>

<h1>Befolkningstall i Norge</h1>

<table>
    <tr>
        <td style="background-color: darkseagreen;">År</td>
        <td style="background-color: darkseagreen;">Folketall</td>
    </tr>

    {#each befolkning as b}
        <tr>
            <td>{b["år"]}</td>
            <td>{b["folketall"]}</td>
        </tr>
    {/each}
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