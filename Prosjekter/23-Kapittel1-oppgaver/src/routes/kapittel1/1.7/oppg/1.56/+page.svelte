<script>
    let emoji = ["&#128176;", "&#128142;", "&#127826;"]
    let tilfeldige = []
    let antallTrekk = 0
    let poeng = 0

    function trekkTilfeldig() {
        tilfeldige = [[], [], []]

        for (let i = 0; i < tilfeldige.length; i++) {
            for (let j = 0; j < 3; j++) {
                let tilfeldigTall = Math.floor(Math.random()*emoji.length)
                tilfeldige[i].push(emoji[tilfeldigTall])
            }     
        }

        antallTrekk++

        sjekkPaaRad(tilfeldige)
        sjekkDiagonalt(tilfeldige)
        sjekkOvenfor(tilfeldige)
    }

    function sjekkPaaRad(symboler) {
        for (let i = 0; i < symboler.length; i++) {
            if (symboler[i][0] == symboler[i][1] && symboler[i][0] == symboler[i][2] && symboler[i][1] == symboler[i][2]) {
                poeng++
            }
        }
    }

    function sjekkDiagonalt(symboler) {
        let diagonalNedHoyre = symboler[0][0] == symboler[1][1] && symboler[0][0] == symboler[2][2] && symboler[1][1] == symboler[2][2]
        let diagonalOppHoyre = symboler[2][0] == symboler[1][1] && symboler[2][0] == symboler [0][2] && symboler[1][1] == symboler[0][2]

        if (diagonalNedHoyre || diagonalOppHoyre) {
            poeng++
        }
    }

    function sjekkOvenfor(symboler) {
        for (let i = 0; i < symboler.length; i++) {
            if (symboler[0][i] == symboler[1][i] && symboler[0][i] == symboler[2][i] && symboler[1][i] == symboler[2][i]) {
                poeng++
            }
        }
    }

</script>

<div class="emojier">
    {#each tilfeldige as t, i}
        {#each tilfeldige[i] as e}
            {@html e}
        {/each}
    {/each}
</div>

<button on:click={trekkTilfeldig}>Trekk</button>
<h3>Antall trekk: {antallTrekk}</h3>
<h3>Du har fått {poeng} poeng</h3>

<style>
    .emojier {
        margin-bottom: 60px;
        height: 20px;
        width: 66px;
    }
</style>