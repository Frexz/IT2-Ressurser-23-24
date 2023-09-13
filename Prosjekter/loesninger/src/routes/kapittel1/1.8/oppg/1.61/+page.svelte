<script>
    let statistikk = {
        "underernaert": 873,
        "overvekt": 1750,
        "ekstrem": 844,
        "sult": 7.8,
        "drikkevann": 770
    }

</script>

<h1>Verdensstatistikk per 11.09.2023</h1>

<table>
    <tr>
        <td style="background-color: darkseagreen;">Underernærte mennesker</td>
        <td>{statistikk["underernaert"]} mill.</td>
    </tr>

    <tr>
        <td style="background-color: darkseagreen;">Overvektige mennesker</td>
        <td>{statistikk["overvekt"]} mill.</td>
    </tr>

    <tr>
        <td style="background-color: darkseagreen;">Ekstemt overvektige mennesker</td>
        <td>{statistikk["ekstrem"]} mill.</td>
    </tr>

    <tr>
        <td style="background-color: darkseagreen;">Mennesker døde av sult i år</td>
        <td>{statistikk["sult"]} mill.</td>
    </tr>

    <tr>
        <td style="background-color: darkseagreen;">Mennesker uten tilgang på rent drikkevann</td>
        <td>{statistikk["drikkevann"]} mill.</td>
    </tr>
</table>

<style>
    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid green;
        padding: 10px;
    }
</style>