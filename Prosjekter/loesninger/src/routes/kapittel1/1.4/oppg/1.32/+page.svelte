<script>
    let fornavn = "fredrik"
    let etternavn = "pettersen"
    let email = "f.pettersen@email.com"
    let telefon = "81541300"
</script>

<div class="innhold">
    <div class="inputfelt">
        <input type="text" placeholder="Skriv inn fornavn" bind:value={fornavn}>
        <input type="text" placeholder="Skriv inn etternavn" bind:value={etternavn}>
        <input type="text" placeholder="Skriv inn epost" bind:value={email}>
        <input type="text" placeholder="Skriv inn telefonnummer" bind:value={telefon}>
    </div>

    <div class="tabell">
        <table>
            <tr>
                <td style="background-color: lightblue;">Navn</td>
                <td>{etternavn.toUpperCase() + ", " + fornavn.charAt(0).toUpperCase() + fornavn.slice(1)}</td>
            </tr>

            <tr>
                <td style="background-color: lightblue;">E-postadresse</td>
                <td>{email}</td>
            </tr>
            
            <tr>
                <td style="background-color: lightblue;">Telefonnummer</td>
                <td>{telefon.slice(0, 2) + " " + telefon.slice(2, 4) + " " + telefon.slice(4, 6) + " " + telefon.slice(6, 8)}</td>
            </tr>
        </table>
    </div>
</div>

<style>
    input {
        margin: 10px;
    }

    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
        padding: 10px;
    }

    .innhold {
        display: flex;
    }

    .inputfelt {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
    }

    .tabell {
        display: flex;
        justify-content: center;
    }
</style>