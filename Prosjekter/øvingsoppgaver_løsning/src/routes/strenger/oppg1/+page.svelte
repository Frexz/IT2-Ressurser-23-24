<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";

    let n = 100
    let utskrift = []

    // Det viktige her er å sjekke det aller mest spesifikke tilfellet først i if-setningen. Deretter kan de andre betingelsene sjekkes.
    // Dette er generelt alltid en god regel å forholde seg til når man lager if-setninger som sjekker flere betingelser.
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            utskrift.push("FizzBuzz")
        } else if (i % 3 == 0) {
            utskrift.push("Fizz")
        } else if (i % 5 == 0) {
            utskrift.push("Buzz")
        } else {
            utskrift.push(i)
        }
    }

</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 1</h1>
        <p>
            Skriv et program som skriver ut tallene fra 1 til 100, men med noen unntak. 
            Hvis tallet er delelig med 3 skrives det ut «Fizz» og hvis tallet er delelig med 5 skrives ut «Buzz». 
            Hvis tallet er delelig med både 3 og 5 skrives ut «FizzBuzz». 
            Tallene fra 1 til 20 vil f.eks da se slik ut:
            <br><br>
            1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz

        </p>
    </div>

    <div class="oppgave" slot="oppgave">
        {#each utskrift as element}
            <div class="element">
                <p>{element}</p>
            </div>
        {/each}
    </div>
</OppgaveLayout>

<style>
    .element {
        margin: 6px;
        height: 50px;
    }

    .oppgave {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>