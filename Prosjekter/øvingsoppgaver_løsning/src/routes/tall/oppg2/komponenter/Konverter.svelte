<script>
    // Objektet inneholder hvilken størrelse konverteringen handler om, hvilken enhet man konverter fra,
    // hvilken enhet man konverterer til, og en funksjon som konverterer begge veier
    export let k
    let fromUnitValue = 0
    let toUnitValue = 0
    let rev = false     // Sjekker hvilken vei vi ønsker konverteringen

    // Funksjonen endrer vei på konverteringen. F.eks i stedet for fra kg til lbs får vi lbs til kg
    function reverse() {
        let temp = k.fromUnit
        k.fromUnit = k.toUnit
        k.toUnit = temp

        fromUnitValue = 0
        toUnitValue = 0

        rev = rev ? false : true
    }

    // Lytter som kjører convert-funksjonen hvis fromUnitValue endrer seg
    $: {
        toUnitValue = k.convert(fromUnitValue, rev)
    }
</script>

<h2>{k.quantity}</h2>
<div class="konverter">
    <label for="">{k.fromUnit}</label> <input type="number" bind:value={fromUnitValue}>
    <input class="reverse" type="image" src="/img/reverse.png" alt="reverse" on:click={reverse}>
    <label for="">{k.toUnit}</label><input type="number" bind:value={toUnitValue}>
</div>


<style>
    label {
        font-size: 20px;
        margin: 0 20px;
    }

    .konverter {
        display: grid;
        grid-template-columns: repeat(5, 150px);
        place-items: center;
    }

    .reverse {
        height: 15px;
        width: 15px;
        margin: 0 20px;
    }
</style>