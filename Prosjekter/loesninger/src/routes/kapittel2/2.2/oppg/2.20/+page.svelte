<script>
    import Fruktfakta from "../../../../../../../gjenbruk/komponentbibliotek/Fruktfakta.svelte";
    let props = [
        {"navn": "vannmelon", "ikon": "&#127817", "lenke": "https://frukt.no/ravarer/frukt/meloner/vannmelon/", "farge": "#f9584b"},
        {"navn": "ananas", "ikon": "&#127821", "lenke": "https://frukt.no/ravarer/frukt/ananas/", "farge": "#fceb96"},
        {"navn": "eple", "ikon": "&#127822", "lenke": "https://frukt.no/ravarer/frukt/epler/", "farge": "#c03641"},
        {"navn": "banan", "ikon": "&#127820", "lenke": "https://frukt.no/ravarer/frukt/banan/", "farge": "#ffe343"},
        {"navn": "druer", "ikon": "&#127815", "lenke": "https://frukt.no/ravarer/frukt/druer/", "farge": "#814e59"},
        {"navn": "kiwi", "ikon": "&#129373", "lenke": "https://frukt.no/ravarer/frukt/kiwi/", "farge": "#afd44d"},
    ]

    let fakta = [
        "Vannmelon inneholder 92% vann og er i slekt med agurk.",
        "En tredjedel av verdens ananaseksport kommer fra Hawai'i.",
        "Mennesker har antakelig dyrket epler i tusener av år.",
        "Bananen kommer opprinnelig fra Asia, men har spredd seg til all verdens tropiske strøk.",
        "Spania produserer flest druer i verden, mest til bruk i vin.",
        "Kiwien er oppkalt etter New Zealands nasjonalfugl med samme navn."
    ]
</script>

<div class="faktakort">
    {#each props as prop, i}
        <Fruktfakta navn={prop["navn"]} frukt={prop["ikon"]} lenke={prop["lenke"]} farge={prop["farge"]}>
            {fakta[i]}
        </Fruktfakta>
    {/each}
</div>

<style>
    .faktakort {
        display: grid;
        grid-template-columns: repeat(3, 400px);
        grid-template-rows: repeat(2, 250px);
        row-gap: 30px;
    }
</style>