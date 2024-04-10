<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";

    let n = 1
    let erPrim

    function sjekkPrim(n) {
        // Det er tilstrekkelig å bare sjekke tall mindre eller lik kvadratroten av tallet. Dette er fordi minst én av faktorene må være mindre enn eller lik
        // kvadratroten til tallet.
        for (let i = Math.floor(Math.sqrt(n)); i > 1; i--) {
            // Hvis tallet er delelig med en eller annen faktor mindre enn seg selv er tallet ikke primtall.
            if (n % i == 0) {
                erPrim = false
                return // Bryter løkken hvis tallet ikke er primtall
            }
        }

        erPrim = true
    }

    // Gjør at bruker ikke kan legge inn tall mindre enn 2
    $: {
        if (n < 0) {
            n = 0
        }
    }

    $: {
        sjekkPrim(n)
    }
</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 2</h1>
        <p>
            Et primtall er et tall som kun er delelig med seg selv og 1. Tallet har med andre ord ingen andre faktorer.
            <br><br>
            Skriv et program som tar imot et tall n fra brukeren og som sjekker om tallet er primtall eller ikke.
        </p>
    </div>

    <div class="oppgave" slot="oppgave">
        <h2>Velg et tall n større enn 1</h2>
        <input type="number" bind:value={n} style="margin-bottom:50px;">

        <p style="color: {erPrim ? 'green' : 'red'}">
            {#if erPrim}
                {n} er et primtall.
            {:else}
                {n} er ikke et primtall.
            {/if}
        </p>
    </div>
</OppgaveLayout>