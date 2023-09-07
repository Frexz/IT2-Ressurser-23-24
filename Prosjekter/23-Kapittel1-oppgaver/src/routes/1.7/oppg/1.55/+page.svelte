<script>
    let emoji = ["&#128176;", "&#128142;", "&#127826;"]
    let tilfeldige = []
    let antallTrekk = 0
    let poeng = 0

    function trekkTilfeldig() {
        tilfeldige = []

        for (let i = 0; i < 3; i++) {
            let tilfeldigTall = Math.floor(Math.random()*emoji.length)
            tilfeldige.push(emoji[tilfeldigTall])
        }

        antallTrekk++

        if (tilfeldige[0] == tilfeldige[1] && tilfeldige[0] == tilfeldige[2] && tilfeldige[1] == tilfeldige[2]) {
            poeng++
        }
    }
</script>

<div class="emojier">
    {#each tilfeldige as e}
        {@html e}
    {/each}
</div>

<button on:click={trekkTilfeldig}>Trekk</button>
<h3>Antall trekk: {antallTrekk}</h3>
<h3>Du har fått {poeng} poeng</h3>

<style>
    .emojier {
        margin-bottom: 10px;
        height: 20px;
        width: 66px;
    }
</style>