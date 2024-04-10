<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";
</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 1</h1>
        <p>
            Lag en flagg-quiz der navnet på et tilfeldig valgt land kommer opp på skjermen med 
            fire tilfeldige flagg (én av dem må være riktig). 
            La brukeren kunne trykke på flaggene og få tilbakemelding på om det var riktig eller galt.  
            Landene med tilhørende flagg kan hentes fra <a href="https://github.com/linssen/country-flag-icons/blob/master/countries.json" target="_blank">denne</a> 
            JSON-filen (kopier og lim inn teksten i en JSON-fil dere selv oppretter).
        </p>
    </div>

    <div class="oppgave" slot="oppgave">
        <h1>Se egen fane</h1>
    </div>
</OppgaveLayout>