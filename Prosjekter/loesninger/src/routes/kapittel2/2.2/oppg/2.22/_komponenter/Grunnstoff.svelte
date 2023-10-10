<script>
    export let navn
    export let nummer
    export let symbol
    export let type
    let farge

    if (type == "metall") {
        farge = "#f500ff"
    } else if (type == "halvmetall") {
        farge = "#997d9a"
    } else {
        farge = "#f0f0f0"
    }

</script>

<div class="grunnstoff-med-navn">
    <div class="grunnstoff" style="background-color: {farge};">
            <p class="nummer">{nummer}</p>
            <p class="symbol">{symbol}</p>
    </div>
    <p style="margin-top: 5px;">{navn}</p>
</div>

<style>
    .grunnstoff {
        border: 3px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
        height: 50px;
        width: 50px;
    }

    .grunnstoff-med-navn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nummer {
        font-size: 14px;
        margin: 0;
    }

    .symbol {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
    }
</style>