<script>
    let tekst = "Skriv eller kopier inn tekst med små og STORE bokstaver."

    const stor = () => {console.log(tekst.toUpperCase())}
    const liten = () => {console.log(tekst.toLowerCase())}
</script>

<input style="height: 200px; width: 600px;" bind:value={tekst}> <br />
<button on:click={stor(tekst)}>STOR</button>
<button on:click={liten()}>liten</button>

<h1>Testsamling</h1>
<table>
    <tr style="background-color: #F5FCCD">
        <td>#</td>
        <td>Test</td>
        <td>Forventet resultat</td>
        <td>Faktisk resultat</td>
        <td>Endringer for å fikse</td>
    </tr>

    <tr>
        <td>1</td>
        <td>Skriv inn strengen "hei" og trykk på knappen "STOR"</td>
        <td>"HEI"</td>
        <td>"HEI"</td>
        <td></td>
    </tr>

    <tr>
        <td>2</td>
        <td>Skriv inn strengen "HEI" og trykk på knappen "liten"</td>
        <td>"hei"</td>
        <td>"HEI"</td>
        <td>liten-funksjonen trenger argumentet tekst, samme som stor-funksjonen</td>
    </tr>

    <tr>
        <td>3</td>
        <td>Skriv inn strengen "Hei Alle Sammen!" og trykk på knappen "STOR"</td>
        <td>"HEI ALLE SAMMEN!"</td>
        <td>"HEI ALLE SAMMEN!"</td>
        <td></td>
    </tr>

    <tr>
        <td>4</td>
        <td>Skriv inn strengen "Hei Alle Sammen!" og trykk på knappen "liten"</td>
        <td>"hei alle sammen!"</td>
        <td>"Hei Alle Sammen!"</td>
        <td>liten-funksjonen trenger argumentet tekst, samme som stor-funksjonen</td>
    </tr>

    <tr>
        <td>5</td>
        <td>Skriv inn strengen "" og trykk på knappen "STOR"</td>
        <td>""</td>
        <td>""</td>
        <td></td>
    </tr>

    <tr>
        <td>6</td>
        <td>Skriv inn strengen "" og trykk på knappen "liten"</td>
        <td>""</td>
        <td></td>
        <td>liten-funksjonen trenger argumentet tekst, samme som stor-funksjonen</td>
    </tr>
    
</table>

<style>
    h1 {
        margin-top: 100px;
    }

    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
        padding: 5px;
    }
</style>