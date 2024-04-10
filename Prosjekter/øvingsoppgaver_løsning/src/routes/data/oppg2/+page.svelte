<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";
    import Konverter from "../../tall/oppg2/komponenter/Konverter.svelte";
</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 2</h1>
        <p>
            Lag et program som omgjør fra én valuta til en annen. 
            La brukeren få velge valuta man skal omgjøre fra, valuta man skal omgjøre til og beløp. 
            For å gjøre det til litt mindre arbeid kan dere begrense dere til Euro (EUR), Amerikanske Dollar (USD), 
            Britiske Pund (GBP) og Norske Kroner (NOK).  Kursene finner dere i dette APIet:
        </p>
        <ul>
            <li>
                Liste med navn på alle valutaene
                <a href="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json" target="_blank">https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json</a>
            </li>
            <li>
                Liste med alle kursene (disse er alltid oppdaterte så bruk url-en direkte når dere henter dataene)
                <a href="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json" target="_blank">https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json</a>
            </li>
        </ul>
        <p>
            Legg merke til at alle kursene er til Euro, så f.eks under NOK vil det stå 11,3 hvilket 
            betyr at 1 Euro = 11,3 NOK. For å omgjør mellom de andre valutaene må dere da gå via Euro.
        </p>
        
    </div>

    <div class="oppgave" slot="oppgave">
        <Konverter/>
    </div>
</OppgaveLayout>