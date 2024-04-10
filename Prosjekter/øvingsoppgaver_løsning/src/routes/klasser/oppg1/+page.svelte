<script>
    import OppgaveLayout from "../../../komponenter/OppgaveLayout.svelte";
    import { Produkt, Beholdning } from "./klasser";

    let beholdningSum = 0

    // Oppretter en beholdning
    let beholdning = new Beholdning()
    
    // Oppretter noen eksempel produkter og legger dem til beholdningen
    beholdning.leggTil(new Produkt("Paprika", 19.90))
    beholdning.leggTil(new Produkt("Kjøttdeig", 59.90))
    beholdning.leggTil(new Produkt("Pizza", 49.90))
    beholdning.leggTil(new Produkt("Fiskesuppe", 15.90))

    $: {
        beholdningSum = beholdning.summerAlleProdukter()
        beholdning = beholdning // Husk denne linjen når man endrer tilstanden til objekter for å tvinge oppdatering
    }

</script>

<OppgaveLayout>
    <div class="tekst" slot="tekst">
        <h1>Oppgave 1</h1>
        <p>
            Skriv et lite program som håndterer en beholdning med produkter, 
            slik som man typisk vil kunne finne i en butikk. 
            Lag en produktklasse som har en id, pris og antall i beholdningen. 
            Lag en beholdningsklasse som holder styr på alle de forskjellige 
            produktene og som kan summere opp verdien av alle produktene i beholdningen til sammen.
        </p>
    </div>

    <div class="oppgave" slot="oppgave">
        {#each beholdning.hentBeholdning() as produkt}
            <div class="produkt">
                <p>Id: {produkt.id}</p>
                <p>Produktnavn: {produkt.navn}</p>
                <p>Pris: {produkt.pris.toFixed(2)} kr</p>
                <p>Antall: <button on:click={() => {
                    produkt.antall++
                }}>+</button> 
                
                {produkt.antall} 
                
                <button on:click={() => {
                    produkt.antall--
                    
                    // Unngår negative antall produkter
                    if (produkt.antall < 0) {
                        produkt.antall = 0
                    }
                }}>-</button>
                <br>
                <img src="{produkt.img}" alt="">
                </p>
            </div>
        {/each}

        <div class="sum">
            <h2>Sum av alle produkter i beholdningen:</h2>
            <p style="color: green;">{beholdningSum.toFixed(2)} kr</p>
        </div>
    </div>
</OppgaveLayout>

<style>
    img {
        height: 150px;
        width: 150px;
        margin-top: 20px;
    }

    .produkt {
        text-align: center;
        margin: 0px 50px;
    }

    .oppgave {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>