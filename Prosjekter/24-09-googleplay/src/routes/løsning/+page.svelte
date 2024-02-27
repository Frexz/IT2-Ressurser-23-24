<script>
    /* Importerer JSON-fil */
    import googleplay from '$lib/googleplaystore.json'

    /* Lager et object og sorterer hver app inn i en kategori. Nøkkelen er kategorinavnet og verdien er et
    array med alle appene som tilhører kategorien.*/
    let appsByCategory = {}
    googleplay.forEach(element => {
        /* Hvis nøkkel ikke finnes skal en ny nøkkel lages. */
        if (!(element.Category in appsByCategory)) {
            appsByCategory[element.Category] = [element]
        /* Hvis nøkkel finnes skal app legges til arrayet tilhørende nøkkelen. */
        } else {
            appsByCategory[element.Category].push(element)
        }
    })

    /* Sorterer og plukker ut de tre kategoriene med flest apper. Object.entries() returnerer (nøkkel, verdi)-par og
    disse parene sorterer etter verdiens length fordi verdiene er arrays med apper. De tre største kategoriene plukkes ut. */
    let topThreeCategories = Object.entries(appsByCategory).sort((a, b) => {return b[1].length - a[1].length}).slice(0, 3)

    /* Her brukes et map for å få tak i de fire infoene oppgaven spør om og returnerer derfor et array som inneholder
    kategorinavn, antall apper i kategorien, gjennomsnittlig rating av appene i kategorien og gjennomsnittlig installasjoner i kategorien. */
    let topThreeCategoriesProcessed = topThreeCategories.map(element => {
        let processed = []

        /* Kategorinavn */
        processed.push(element[0])
        /* Antall apper */
        processed.push(element[1].length)

        /* Noen apper har en rating lik "NaN". Disse filtreres vekk først og tas ikke med i beregningen. Deretter brukes map-metoden
        for å gjøre alle ratingene, som er strings, om til tall. Deretter tas et gjennomsnitt. */
        let ratings = element[1].filter(element => {return element.Rating != "NaN"})
        ratings = ratings.map(element => {return Number(element.Rating)})
        let sumRating = ratings.reduce((acc, current) => {return acc + current})
        let averageRating = sumRating / ratings.length
        processed.push(averageRating)

        /* Installs-egenskapen til en app er i et string-format som må bearbeides. Dette gjøres ved å fjerne alle komma og kutte vekk +-tegnet
        på slutten. Derette gjøres alle disse strengene om til tall. Deretter tas et gjennomsnitt. */
        let installations = element[1].map(element => {return Number(element.Installs.slice(0, element.Installs.length - 1).replaceAll(",", ""))})
        let sumInstalls = installations.reduce((acc, current) => {return acc + current})
        let averageInstalls = sumInstalls / installations.length
        processed.push(averageInstalls)
        
        return processed
    })

    /* Her finnes de tre mest populære appene for hver av de tre topp-kategoriene. De tre appene mest flest installs legges i et array som tilføyes
    det prosesserte arrayet over. Man kan merke seg at her finnes det duplikater så koden kan endres noe for å få de topp 3 unike appene. */
    topThreeCategories.forEach((element, index) => {
        let apps = element[1].map(element => {return [element.App, Number(element.Installs.slice(0, element.Installs.length - 1).replaceAll(",", ""))]})
        apps.sort((a, b) => {return b[1] - a[1]})
        let topThree = apps.slice(0, 3)
        topThreeCategoriesProcessed[index].push(topThree)
    })
    
</script>

<a href="/">Tilbake</a>

<div class="content">
    <table>
        <tr>
            <th>Kategori</th>
            <th>Antall apper</th>
            <th>Gjennomsnittlig rating</th>
            <th>Gjennomsnittlig installasjoner</th>
            <th>Populære apper</th>
        </tr>
    
        {#each topThreeCategoriesProcessed as category}
            <tr>
                <td>{category[0]}</td>
                <td>{category[1]}</td>
                <td>{category[2].toFixed(1)}</td>
                <td>{category[3].toFixed(0)}</td>
                <td>
                    {#each category[4] as app}
                        {app[0]} ({app[1]}) <br>
                    {/each}
                </td>
            </tr>
        {/each}
    </table>
</div>

<style>
    table {
        border-collapse: collapse;
    }

    td, th {
        border: 1px solid black;
        padding: 10px;
    }
    
    th {
        background-color: cornflowerblue;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>