<script>
    import credit_card from '$lib/credit_card.json'

    let kunderSpania = credit_card.filter(element => {return element.Geography == "Spain"})
    let ungeKunderSpania = kunderSpania.filter(element => {return element.Age >= 18 && element.Age < 30})
    ungeKunderSpania.sort((a, b) => {return b.Balance - a.Balance})
    let top5 = ungeKunderSpania.slice(0, 5)

    let land = {}
    credit_card.forEach(element => {
        if (land[element.Geography]) {
            land[element.Geography][0] += element.EstimatedSalary
            land[element.Geography][1] += 1
        } else {
            land[element.Geography] = [element.EstimatedSalary, 1]
        }
    })

</script>

<h1>Oppgave 7</h1>

<p>a)</p>
<table>
    <tr class="header">
        <td>Etternavn</td>
        <td>Alder</td>
        <td>Saldo</td>
        <td>Kundeforhold</td>
    </tr>
    {#each top5 as kunde}
        <tr>
            <td>{kunde.Surname}</td>
            <td>{kunde.Age}</td>
            <td>{kunde.Balance}</td>
            <td>{kunde.Tenure}</td>
        </tr>
    {/each}
</table>

<p>b)</p>
<table>
    <tr class="header">
        <td>Land</td>
        <td>Gjennomsnittlig Årslønn</td>
    </tr>
    {#each Object.keys(land) as l}
        <tr>
            <td>{l}</td>
            <td>{(land[l][0] / land[l][1]).toFixed(2)}</td>
        </tr>
    {/each}
</table>

<style>
    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
        padding: 5px;
    }

    .header {
        background-color: cornflowerblue;
    }
</style>