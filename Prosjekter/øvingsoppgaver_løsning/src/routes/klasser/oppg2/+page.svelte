<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";
</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 2</h1>
        <p>
            Skriv et program som hjelper en lege med å lage avtaler med pasientene sine. 
            Lag en klasse for pasienter og en klasse for leger. Pasienten bør ha en id, navn og telefonnummer. 
            Legen bør ha en id, navn og kalender (dette kan være så enkelt som et array eller objekt).  
            I tillegg bør legen ha en metode for å legge inn en avtale med en pasient. 
            Legen har en arbeidsdag på 8 timer og kan håndtere opptil 16 pasienter per dag.
        </p>
    </div>

    <div class="oppgave" slot="oppgave">
        
    </div>
</OppgaveLayout>