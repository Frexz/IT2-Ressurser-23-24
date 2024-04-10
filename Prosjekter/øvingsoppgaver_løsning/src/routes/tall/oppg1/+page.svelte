<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";

    let n = 1
    let sekvens = [0, 1]

    // Funksjon som regner ut de n første Fibonacci-tallene
    function fibonacci(n) {
        // Sørger for at sekvenser nullstilles hver gang vi endrer verdi for n
        sekvens = [0, 1]

        // Regner ut neste Fibonacci-tall opp til n
        for (let i = 1; i < n; i++) {
            sekvens.push(sekvens[i-1] + sekvens[i])
        }
    }

    // Sjekker om verdien til n endrer seg. Hvis ja, kaller vi på funksjonen-
    $: {
        // Sørger for at verdien til n aldri blir mindre enn 1
        if (n < 1) {
            n = 1
        }

        fibonacci(n)
    }

</script>
<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 1</h1>
        <p>
            Skriv et program som viser de n første Fibonacci-tallene. La brukeren få velge verdien for n 
            (f.eks ved hjelp av et input-felt). Vis rekken med Fibonacci-tall på skjermen. 
            Hvis du har glemt Fibonacci-tallene kan lese kort om dem <a href="https://www.vilvite.no/mer/fibonacci-rekken" target="_blank">her</a>.
        </p>
    </div>

    <div slot="oppgave">
        <h2>Velg et tall n</h2>
        <input type="number" bind:value={n} style="margin-bottom:50px;">

        <h2>Fibonacci-sekvensen opptil F<sub>{n}</sub></h2>
        <p style="font-size: 32px;">
            {#each sekvens as num}
                {num}&emsp;
            {/each}
        </p>
        
    </div>
</OppgaveLayout>



