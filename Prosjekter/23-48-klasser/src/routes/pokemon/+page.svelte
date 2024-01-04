<script>
    class Pokemon {
        constructor(navn) {
            this.navn = navn
            this.bilde = `https://img.pokemondb.net/sprites/x-y/normal/${this.navn}.png`
        }
    }

    let p1 = new Pokemon("entei")
    let p2 = new Pokemon("suicune")
    let p3 = new Pokemon("raikou")
</script>

<div class="innhold">
    <h1>Pokemon</h1>

    <div class="boks">

        <div class="pokemon1">
            <h1>{p1.navn}</h1>
            <img src={p1.bilde} alt="">
        </div>

        <div class="pokemon2">
            <h1>{p2.navn}</h1>
            <img src={p2.bilde} alt="">
        </div>

        <div class="pokemon3">
            <h1>{p3.navn}</h1>
            <img src={p3.bilde} alt="">
        </div>

    </div>
</div>



<style>
    .boks {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 50px;
        height: 20vh;
        width: 80vw;
    }

    .innhold {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>