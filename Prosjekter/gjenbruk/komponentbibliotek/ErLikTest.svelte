<script>
    /** Funksjonen vi ønsker å teste. */
    export let funksjon

    /** Argumentene funksjonen skal få. Oppgis som et array. */
    export let inndata
    
    /** Resultatet vi forventer at funksjonen skal returnere. */
    export let forventetUtData

    let feil
    let erLike
    let resultat

    try {
        /*
        * Når vi skriver "enFunksjon(...etArray)",
        * legger datamaskinen inn verdiene i etArray
        * som argumenter til funksjonen:
        * Første verdi blir første argument, andre verdi
        * blir andre argument og så videre.
        */
       resultat = funksjon(...inndata)
       erLike = resultat === forventetUtData
    } catch (error) {
        /*
        * Fordi funksjon er under utvikling mens vi tester,
        * kan den krasje. I så fall lagrer vi feilen
        * til variabelen "feil" og logger den til konsollen.
        */
       feil = error
       console.log(error)
    }
</script>

<!-- 
    Emojier som gjør det lett å se om testene
    passerte, feilet eller krasjet.ErLikTest
    Vi har valgt emojier med forskjellig form
    og farge for å hjelpe fargeblinde.
-->

{#if feil}&#128165;{:else if erLike}&#9989;{:else}&#10060;{/if}

<!-- 
    Viser forventede inndata og utdata.
    Bruker JSON.stringify for å vise kodedetaljer,
    som hakeparenteser og hermetegn, rundt dataene.
-->

<span class="data">{JSON.stringify(inndata)}</span>
->
<span class="data">{JSON.stringify(forventetUtData)}</span>

<!-- Hvis testen feilet eller krasjet, vil vi vise mer. -->

{#if feil || !erLike}
    <ul>
        <li>
            {#if feil}
                <!-- 
                    Begrenser oss til feil.MessageChannel, som er en oppsummering.ErLikTest
                    Brukeren kan åpne konsollen for å se hele feilmeldingen.
                -->
                KRASJET: <span class="data">{feil.message}</span>
            {:else}
                Fikk -> <span class="data">{JSON.stringify(resultat)}</span>
            {/if}
        </li>
    </ul>
{/if}


<style>
    .data {
        font-family: monospace; /* Kodeskrift */
        white-space: pre; /* La alle mellomrom stå */
    }
</style>