<script>
    let brukere = {"fred15": "passord"}
    let brukernavn = "fred15"
</script>

<div class="tekst">
    <p>
        Et JavaScript-objekt er definert på samme måte som arrays bare at man bruker krøllparenteser i stedet for
        hakeparenteser, slik: <i>let obj = &#123;&#125;</i>. <br>
        Objektet i eksempel er et tomt objekt. Vanligvis er
        objekter fylt med nøkkel-verdi-par, slik: <i>let obj = &#123;"nøkkel1": verdi1, 
        "nøkkel2": verdi2, "nøkkel3": verdi3 ...&#125;</i>. Nøklene er strenger som refererer til en verdi. Enhver verdi
        må ha en unik nøkkel. Så nøklene blir på en måte variabelnavnene til verdiene inni objektet, eller en slags indeks
        som er en streng i stedet for et nummer. <br>
        For å referere til en verdi i et objekt trenger man å vite nøkkelen som kobler til den verdien og man kan referere
        til verdien på to forskjellige måter. <br>
        Den ene måten er helt lik slik man refererer til verdier i arrays bare man bruker nøkkelen i stedet for en indeks.
        La følgende være et objekt som kobler brukernavn og passord: <i>let brukere = &#123;"fred15": "passord", "rap007": "12345",
        "jegerbruker2005": "XgyNT67M4"&#125;</i>. For å referer til passordet til brukeren med navn "fred15" kan man gjøre slik:
        <i>brukere["fred15"]</i>. Uttrykket gir verdien "passord". En annen måte å gjøre dette på et å bruke .-notasjon slik som
        man gjør ved å referere til egenskaper med objekter eller kalle metoder. Så passordet til brukeren "fred15" kan også gjøres
        slik: <i>brukere.fred15</i>. Det er en forskjell på de to metodene så vil anbefale å bruke metoden som er lik slik som man gjør
        med arrays.
        <br><br>
        For å endre verdien til en nøkkel referer man først til verdien slik som ovenfor og deretter setter dette lik en ny verdi, slik:
        <i>brukere["fred15"] = "eTmY3sT3rk3r3Pa550rD"</i>
    </p>
</div>

<style>
    .tekst {
        width: 40vw;
    }
</style>