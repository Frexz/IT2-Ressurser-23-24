<script>
    import indisk from '$lib/indisk.json'
    
    /* Plukker ut mat som er middagsmat */
    let middagsmat = []
    indisk.forEach(element => {
        if (element.Dinner == 1) {
            middagsmat.push(element)
        }
    })

    /* Sorterer etter antall kalorier fra størst til minst
    og velger ut de 5 største */
    middagsmat.sort((a, b) => {return b.Calories - a.Calories})
    let top5 = middagsmat.slice(0, 5)

</script>

<a href="/">Tilbake</a>'

<h1>Indisk middagsmat med flest kalorier</h1>
<table>
    <tr>
        <th>Mat</th>
        <th>Kalorier (kcal)</th>
    </tr>
    {#each top5 as mat}
        <tr>
            <td>{mat.Food_items}</td>
            <td>{mat.Calories}</td>
        </tr>
    {/each}
</table>

<style>
    th, td {
        border: 1px solid black;
        padding: 10px;
    }

    th {
        background-color: cornflowerblue;
    }

    table {
        border-collapse: collapse;
    }
</style>