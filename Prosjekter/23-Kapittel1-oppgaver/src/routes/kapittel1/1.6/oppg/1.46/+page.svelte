<script>
    let fett
    let karbohydrater
    let proteiner
    let energiKcal
    let energiJoule
    
    function energiFraFett(gramFett) {
        return gramFett * 9
    }

    function energiFraKarbo(gramKarbo) {
        return gramKarbo * 4
    }

    function energiFraProtein(gramProtein) {
        return gramProtein * 4
    }

    function beregnKalorier(gramFett, gramKarbo, gramProtein) {
        energiKcal = energiFraFett(gramFett) + energiFraKarbo(gramKarbo) + energiFraProtein(gramProtein)
        kcalTilJoule(energiKcal)
    }

    function kcalTilJoule(kcal) {
        energiJoule = kcal * 4.18
    }

</script>

<div class="innhold">
    <div class="brukerinput">
        <h1>Energikalkulator</h1>
        <p><i>Oppgi alle tallene i gram</i></p>
        <h4>Fett</h4><input type="number"  bind:value={fett}>
        <h4>Karbohydrater</h4><input type="number"  bind:value={karbohydrater}>
        <h4>Proteiner</h4><input type="number"  bind:value={proteiner}>
        <button on:click={() => beregnKalorier(fett, karbohydrater, proteiner)}>Beregn energi</button>
    </div>

    <div class="output">
        <p><b>Energi i kcal:</b> {energiKcal} kcal</p>
        <p><b>Energi i joule:</b> {energiJoule} kJ</p>
    </div>
</div>


<style>
    .innhold {
        display: flex;
    }

    .brukerinput {
        margin-right: 100px;
    }

    .output {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: right;
    }
    input {
        margin-bottom: 10px;
    }
</style>