<script>
    import Teller from "./_komponenter/Teller.svelte";

    let vare
    let handleliste = [
        {"navn": "Sjokolademelk", "antall": 0},
        {"navn": "Sjokolade", "antall": 0},
        {"navn": "Sjokoladeboller", "antall": 0}
    ]

    function leggTilVare() {
        for (let i = 0; i < handleliste.length; i++) {
            if (handleliste[i]["navn"] == vare) {
                handleliste[i]["antall"]++
                return
            }
        }

        handleliste.push({"navn": vare, "antall": 0})
        handleliste = handleliste
    }

    function fjernVare() {
        handleliste = handleliste.filter((element) => element["navn"] != vare)
    }

</script>



<div class="handleliste">
    <input type="text" bind:value={vare}>
    <button on:click={leggTilVare}>Legg til</button>
    <button on:click={fjernVare}>Fjern vare</button>

    <ul>
        <div class="varer">
            {#each handleliste as vare}
                <li>
                    {vare["navn"]} 
                </li>

                <li>
                    <Teller bind:tall={vare["antall"]}/>
                </li>
            {/each}
        </div>
    </ul>
</div>

<style>
    button {
        margin-left: 10px;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .handleliste {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }

    .varer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
</style>