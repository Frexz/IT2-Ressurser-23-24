<script>
    let grønnSirkel = "&#128994;"
    let lillaSirkel = "&#128995;"
    let oransjeSirkel = "&#128992;"
    let totaltAntall = 10
    let sirkler = []
    let antallGrønne
    let antallLilla
    let antallOransje

    function lagSirkler() {
        sirkler = []
        antallGrønne = Math.floor(Math.random() * totaltAntall)
        antallLilla = Math.floor(Math.random() * (totaltAntall - antallGrønne))
        antallOransje = totaltAntall - antallGrønne - antallLilla

        for (let i = 0; i < antallGrønne; i++) {
        sirkler.push(grønnSirkel)
        }

        for (let i = 0; i < antallLilla; i++) {
            sirkler.push(lillaSirkel)
        }

        for (let i = 0; i < antallOransje; i++) {
            sirkler.push(oransjeSirkel)
        }
    }

</script>

{#each sirkler as s}
    {@html s}
{/each}



<h3 style="color: #16c60c;">Antall grønne sirkler er {antallGrønne}/{totaltAntall}</h3>
<h3 style="color: #886ce4;">Antall lilla sirkler er {antallLilla}/{totaltAntall}</h3>
<h3 style="color: #f7630c;">Antall oransje sirkler er {antallOransje}/{totaltAntall}</h3>

<button on:click={lagSirkler}>Lag Sirkler</button>
<style>
    
</style>