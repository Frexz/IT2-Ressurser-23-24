<script>
    let brukernavn = ""
    let passord = ""
    let melding = ""
    let meldingsType = false // false hvis tilbakemelding er negativ, true hvis bekreftende
    let innlogget = false
    let brukere = []


    /* Denne koden gjør egentlig ingenting annet enn å nullstille meldings-teksten hvis
    dette utsagnet slår ut. Utsagnet vil alltid være sant og siden det er reaktivt vil det
    slå ut med én gang en endring skjer. Altså vil meldingen forsvinne med én gang man forandrer
    enten brukernavn eller passord. */
    $: {
        if (brukernavn || passord) {
            melding = ""
        }
    }

    /* Denne funksjonen håndterer registrering av bruker. */
    function registrerBruker(bnavn, pass) {
        if (sjekkDuplikat(bnavn)) {
            meldingsType = false
            melding = `Brukernavnet ${bnavn} eksisterer allerede. Skriv inn et nytt brukernavn.`
            brukernavn = ""
            passord = ""
        } else if (!sjekkBrukernavnLengde(bnavn)) {
            meldingsType = false
            melding = `Brukernavnet ${bnavn} består av mindre enn 6 tegn. Skriv inn et nytt brukernavn med flere enn 6 tegn.`
            brukernavn = ""
        } else if (!sjekkPassordLengde(pass)) {
            meldingsType = false
            melding = `Passordet du skrev inn ugyldig. Skriv inn et nytt passord med minst 6 tegn og høyst 12 tegn.`
            passord = ""
        } else {
            let bruker = {"brukernavn": bnavn, "passord": passord}
            brukere.push(bruker)

            meldingsType = true
            melding = `Bruker med brukernavn ${bnavn} registrert.`
            brukernavn = ""
            passord = ""
        }
    }

    /* Denne funksjonen sjekker om brukernavnet allerede finnes i listen over brukere. */
    function sjekkDuplikat(bnavn) {
        for (let i = 0; i < brukere.length; i++) {
            if (brukere[i]["brukernavn"] == bnavn) {
                return true
            }
        }
        return false
    }

    /* Sjekker lengden på brukernavn. */
    function sjekkBrukernavnLengde(bnavn) {
        if (bnavn.length >= 6) {
            return true
        }
        return false
    }

    /* Sjekker lengden på passord. */
    function sjekkPassordLengde(pass) {
        if (pass.length >= 6 && pass.length <= 12) {
            return true
        }
        return false
    }

    /* Denne funksjonen håndterer innlogging. */
    function loggInn(bnavn, pass) {
        if (!sjekkDuplikat(bnavn)) {
            meldingsType = false
            melding = `Brukeren med brukernavn ${bnavn} eksisterer ikke. Skriv inn brukernavnet på nytt.`
            brukernavn = ""
            passord = ""
        } else if (!sjekkGyldigPassord(bnavn, pass)) {
            meldingsType = false
            melding = `Feil brukernavn eller passord! Kontroller at brukernavnet og passordet er riktig.`
        } else {
            innlogget = true
            melding = ""
        }
    }

    /* Sjekker om passordet er gyldig, altså at tilhørende bruker har dette passordet. */
    function sjekkGyldigPassord(bnavn, pass) {
        for (let i = 0; i < brukere.length; i++) {
            if (brukere[i]["brukernavn"] == bnavn && brukere[i]["passord"] == pass) {
                return true
            }
        }
        return false
    }

    /* Denne funksjonen håndterer utlogging. */
    function loggUt() {
        innlogget = false
        brukernavn = ""
        passord = ""
    }
</script>

<!-- Innloggingsskjerm -->
{#if !innlogget}
<div class="innlogging">

    <h1>Innlogging</h1>

    <div class="brukerinput">
        <div class="labels">
            <label for="">Brukernavn:</label>
            <label for="">Passord:</label>
        </div>
        <div class="inputs">
            <input type="text" bind:value={brukernavn}>
            <input type="password" bind:value={passord}>
        </div>
    </div>

    <div class="knapper">
        <button on:click={() => loggInn(brukernavn, passord)}>Logg Inn</button>
        <button on:click={() => registrerBruker(brukernavn, passord)}>Registrer</button>
    </div>

    <div class="melding">
        <p style="color: {meldingsType ? "green" : "red"}">{melding}</p>
    </div>
</div>

<!-- Velkomst-skjerm -->
{:else}
    <div class="loggut">
        <div class="velkomst">
            <h1>Velkommen {brukernavn}</h1>
        </div>

        <button on:click={loggUt}>Logg Ut</button>
    </div>
{/if}

<style>
    button {
        height: 40px;
        margin-right: 7px;
        width: 120px;
    }

    h1 {
        background-color: lightsalmon;
        border-radius: 50%;
        text-shadow: darkslategray 2px 2px 4px;
        font-size: 50px;
    }

    input {
        border: 1px solid black;
        font-size: 20px;
        margin-bottom: 10px;
    }

    label {
        font-size: 22px;
        margin-bottom: 14px;
    }

    .brukerinput {
        display: flex;
        margin-bottom: 20px;
    }

    .inputs, .labels {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
    }

    .innlogging, .loggut{
        align-items: center;
        background-color: lightgray;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        width: 100vw;
    }

    .melding {
        height: 20px;
    }
</style>