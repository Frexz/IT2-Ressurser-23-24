<script>
    class Frukt {
        constructor(navn, farge, artikkel) {
            this.navn = navn
            this.farge = farge
            this.ubestemtArtikkel = artikkel
        }

        visInfo() {
            return `Jeg er ${this.ubestemtArtikkel} ${this.navn}.`
        }
    }

    let frukt1 = new Frukt("eple", "green", "et")
    let frukt2 = new Frukt("appelsin", "orange", "en")
    let frukt3 = new Frukt("banan", "yellow", "en")
</script>

<div class="innhold">
    <div class="frukt" style="background-color: {frukt3.farge};">
        <h1>{frukt1.navn}</h1>
        <p>{frukt3.visInfo()}</p>
    </div>
</div>

<style>
    .innhold {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }

    .frukt {
        height: 200px;
        width: 200px;
    }
</style>