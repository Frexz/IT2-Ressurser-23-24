<script>
    import googleplay from '$lib/googleplaystore.json'

    let categories = {}
    googleplay.forEach(element => {
        if (element.Category in categories) {
            categories[element.Category].push(element)
        } else {
            categories[element.Category] = [element]
        }
    })

    let entries = Object.entries(categories)
    entries.sort((a, b) => {return b[1].length - a[1].length})
    let topThree = entries.slice(0, 3)

    let ratings = []
    topThree.forEach(element => {
        let categoryRatings = element[1].filter(element => {return element.Rating != "NaN"})
        categoryRatings = categoryRatings.map(element => {return Number(element.Rating)})
        let sum = categoryRatings.reduce((sum, current) => {return sum + current})
        let average = sum / categoryRatings.length
        ratings.push(average)
    })
</script>

<a href="/løsning">Løsning</a>
<div class="content">
    <table>
        <tr>
            <th>Kategori</th>
            <th>Antall Apper</th>
            <th>Gjennomsnittlig Rating</th>
            <th>Gjennomsnittlige Installasjoner</th>
        </tr>

        {#each topThree as category, i}
            <tr>
                <td>{category[0]}</td>
                <td>{category[1].length}</td>
                <td>{ratings[i].toFixed(1)}</td>
            </tr>
        {/each}
    </table>
</div>

<style>
    table {
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid black;
        padding: 10px;
    }

    th {
        background-color: coral;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>