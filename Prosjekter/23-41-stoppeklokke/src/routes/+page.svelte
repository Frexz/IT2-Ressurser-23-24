<script>
    let intervall
    let hundredels = "00"
    let sekunder = "00"
    let minutter = "00"

    function startKlokke() {
        clearInterval(intervall)
        intervall = setInterval(oppdater, 10)
    }

    function oppdater() {
        let hundredelsTall = Number(hundredels)
        let sekunderTall = Number(sekunder)
        let minutterTall = Number(minutter)
        hundredelsTall++

        if (hundredelsTall % 100 == 0) {
            hundredelsTall = 0
            sekunderTall++
        }

        if (sekunderTall % 60 == 0 && sekunderTall > 0) {
            sekunderTall = 0   
            minutterTall++
        }

        hundredels = tallTilStreng(hundredelsTall)
        sekunder = tallTilStreng(sekunderTall)
        minutter = tallTilStreng(minutterTall)
    }

    function tallTilStreng(tall) {
        if (tall < 10) {
            return "0" + tall.toString()
        }

        return tall.toString()
    }

    function stoppKlokke() {
        clearInterval(intervall)
    }

    function nullstill() {
        minutter = "00"
        sekunder = "00"
        hundredels = "00"
    }

</script>

<div class="innhold">
    <h1>{minutter}<span class="separator">:</span>{sekunder}<span class="separator">.</span>{hundredels}</h1>
    <div class="knapper">
        <button on:click={startKlokke}>Start</button>
        <button on:click={stoppKlokke}>Stopp</button>
        <button on:click={nullstill}>Nullstill</button>
    </div>
</div>

<style>
    .innhold {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }

    .separator {
        margin: 0 5px;
    }

    button {
        background-color: rgb(231, 227, 223);
        border-radius: 8px;
        border-width: 0;
        padding: 8px;
        width: 100px;
    }

    button:hover {
        background-color: rgba(231, 227, 227, 0.80)
    }

    
</style>