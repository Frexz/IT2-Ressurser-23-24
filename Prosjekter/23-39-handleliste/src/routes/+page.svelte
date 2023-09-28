<script>
    import Teller from "./_komponenter/Teller.svelte";

    let handleliste = [
        {"navn": "Sjokolademelk", "antall": 0},
        {"navn": "Sjokolade", "antall": 0},
        {"navn": "Sjokoladeboller", "antall": 0}
    ]

    $: {
        console.log(handleliste)
    }

</script>

<div class="handleliste">
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