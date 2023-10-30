<script>
    import Teller from "./_komponenter/Teller.svelte";
    import { storForbokstav } from "../../../gjenbruk/myFunctions"

    let vare = ""
    let melding = ""
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

        if (vare.length > 20) {
            melding = "Varen kan ikke ha flere enn 20 tegn."
        } else if (vare.length == 0) {
            melding = "Varen må inneholde minst ett tegn."
        } else {
            handleliste.push({"navn": vare, "antall": 0})
            melding = ""
            handleliste = handleliste
        }

        vare = ""
    }

    function fjernVare() {
        handleliste = handleliste.filter((element) => element["navn"] != vare)
        vare = ""
    }

    function handleKeypress(e) {
        if (e.keyCode == 13) {
            leggTilVare()
        }
    }

    $: {
        vare = storForbokstav(vare)
    }

</script>



<div class="handleliste">
    <div class="medFeilmelding">
        <div class="inputs">
            <input type="text" bind:value={vare} on:keypress={(e) => handleKeypress(e)}>
            <button on:click={leggTilVare}>Legg til</button>
            <button on:click={fjernVare}>Fjern vare</button>
        </div>
        <p>{melding}</p>
    </div>

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

    p {
        color: red;
        height: 10px;
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

    .medFeilmelding {
        flex-direction: column;
    }
</style>