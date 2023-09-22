<script>
    // Importerer Svelte-store fra stores.js
    import { handleliste } from "../stores/stores"

    let brukerinput = ""
    /* Henter listen fra Svelte-store til egen variabel. Hver gang denne variabelen
    oppdateres må vi sørge for å oppdatere Svelte-store også. */
    let liste = $handleliste

    function leggTil(nyVare) {
        liste.push(nyVare) // Legger til ny vare i den lokale variabelen
        handleliste.update((value) => liste) // Oppdaterer Svelte-store
        liste = liste // Tvinger oppdatering av nettsiden
    }

    function fjern(input) {
        /* Filter er en array-metode som lager et nytt array med samme elementer, men kun
        dem som oppfyller betingelsen. I vårt tilfelle: alle bortsett fra varen som skal fjernes. */
        liste = liste.filter((vare) => vare != input)
        handleliste.update((value) => liste) // Oppdaterer Svelte-store
    }
</script>

<div class="page">
    <div class="brukerinput">
        <h1>Brukervalg</h1>
        <input type="text" bind:value={brukerinput}>
        <button on:click={() => leggTil(brukerinput)}>Legg til</button>
        <button on:click={() => fjern(brukerinput)}>Fjern</button>
    </div>
    <div class="handleliste">
        <h1>Handleliste</h1>
        <ul>
            {#each liste as vare}
                <li>{vare}</li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .brukerinput {
        margin-right: 100px;
        
    }

    .page {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>
