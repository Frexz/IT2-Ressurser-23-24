<script>

    let navn = ["Andreas", "Bjørnar", "Gard", "Henrik", "Nikolai", "Oliver", "Omran", "Tor Johan", "Vegard"]
    
    let defaultPositions = [
        {id: 'Andreas', x: 1020.4910888671875, y: 64.140625},
        {id: 'Bjørnar', x: 1020.4910888671875, y: 105.56919860839844},
        {id: 'Gard', x: 1020.4910888671875, y: 146.99777221679688},
        {id: 'Henrik', x: 1020.4910888671875, y: 188.4263458251953},
        {id: 'Nikolai', x: 1020.4910888671875, y: 229.85491943359375},
        {id: 'Oliver', x: 1020.4910888671875, y: 271.2834777832031},
        {id: 'Omran', x: 1020.4910888671875, y: 312.7120666503906},
        {id: 'Tor Johan', x: 1020.4910888671875, y: 354.140625},
        {id: 'Vegard', x: 1020.4910888671875, y: 395.5692138671875},
    ]

    let currentPositions = [
        {id: 'Andreas', x: 1020.4910888671875, y: 64.140625},
        {id: 'Bjørnar', x: 1020.4910888671875, y: 105.56919860839844},
        {id: 'Gard', x: 1020.4910888671875, y: 146.99777221679688},
        {id: 'Henrik', x: 1020.4910888671875, y: 188.4263458251953},
        {id: 'Nikolai', x: 1020.4910888671875, y: 229.85491943359375},
        {id: 'Oliver', x: 1020.4910888671875, y: 271.2834777832031},
        {id: 'Omran', x: 1020.4910888671875, y: 312.7120666503906},
        {id: 'Tor Johan', x: 1020.4910888671875, y: 354.140625},
        {id: 'Vegard', x: 1020.4910888671875, y: 395.5692138671875},
    ]

    function plasser() {
        let element = document.getElementById("Bjørnar")
        element.style.left = 500 + "px"
    }

</script>

<div class="plasseringer">
    <div class="klasserom">
        {#each {length: 9} as _, i}
            <div class="plassering" id={i}>
                <p>{i}</p>
            </div>
        {/each}
    </div>

    <div class="navneliste">
        {#each navn as n, i}
            <div class="navn" style="left: {defaultPositions[i]["x"]}px; top: {defaultPositions[i]["y"]}px">
                <p>{n}</p>
            </div>
        {/each}

        <div class="knapper">
            <button on:click={plasser}>Plasser</button>
            <button>Nullstill</button>
        </div>
    </div>
</div>

<style>
    .klasserom {
        display: grid;
        align-items: center;
        justify-content: center;
        column-gap: 50px;
        grid-template-columns: repeat(3, 250px);
        height: 500px;
        width: 900px;
    }

    .knapper {
        position: relative;
        bottom: -200px;
    }

    .navn {
        background-color: antiquewhite;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        position: absolute;
        height: 30px;
        width: 80px;
    }

    .navneliste {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: lightcoral;
        border-left: 3px dashed black;
        height: 500px;
        width: 300px;
    }

    .plassering {
        background-color: lightgray;
        border: 1px solid black;
        display: flex;
        justify-content: center;
    }

    .plasseringer {
        border: 3px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 500px;
        width: 1200px;
    }


</style>