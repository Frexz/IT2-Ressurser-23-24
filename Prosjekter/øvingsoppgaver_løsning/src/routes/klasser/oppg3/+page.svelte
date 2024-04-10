<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";
</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 3</h1>
        <p>
            Skriv et program som lar brukeren velge en figur (sirkel, rektangel og trekant) der brukeren kan bestemme 
            dimensjonene til figuren. Programmet skriver ut areal og omkrets til figuren. 
            Lag en samleklasse (abstrakt klasse) som heter Figur med en metode for å regne ut areal og en metode 
            for å regne ut omkrets (disse er gjerne tomme i samleklasse). 
            La klassene Sirkel, Trekant og Rektangel arve fra Figur og legg til de nødvendige feltene i konstruktøren og metodene.
        </p>
    </div>

    <div class="oppgave" slot="oppgave">
        
    </div>
</OppgaveLayout>