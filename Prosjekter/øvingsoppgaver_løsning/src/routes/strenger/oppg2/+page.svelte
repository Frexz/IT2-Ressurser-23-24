<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";
    // Velger å lage funksjonen i en egen js-fil slik at den kan enklere gjenbrukes.
    // F.eks i oppgave 4 kan vi få bruk for den igjen.
    import { reverser } from "./reverser"

    let streng = "Hallo, Fredrik!"
    let baklengsStreng

    $: {
        baklengsStreng = reverser(streng)
    }
    
</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 2</h1>
        <p>
            Skriv et program som tar imot en streng fra brukeren og som skriver ut strengen motsatt vei. 
            F. eks hvis strengen er «Hallo, Fredrik!» skriver programmet «!kirderF ,ollaH».
        </p>
    </div>

    <div class="oppgave" slot="oppgave">
        <h2>Skriv inn en setning</h2>
        <input type="text" bind:value={streng} style="margin-bottom:50px;">

        <h2>Setningen baklengs blir:</h2>
        <p>{baklengsStreng}</p>
    </div>
</OppgaveLayout>