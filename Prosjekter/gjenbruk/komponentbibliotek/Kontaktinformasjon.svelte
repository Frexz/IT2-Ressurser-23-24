<script>

    /* Variabelen info er et objekt med følgende felter:
    navn: streng
    adresse: streng
    telefon: streng
    epost: streng
    farger: streng[] - fargekode til bakgrunnsfarge først og tekstfarge som neste */
    export let info
</script>

<footer style="--bakgrunnsfarge: {info.farger[0]}; --tekstfarge: {info.farger[1]}">
    <div class="info">
        <h1 class="navn">{info["navn"]}</h1>
        <p class="adresse">{info["adresse"]}</p>
        <p>{info["telefon"]}</p>
        <p>{info["epost"]}</p>
    </div>
</footer>

<style>
    .info {
        display: grid;
        grid-template-columns: 200px 200px;
        text-align: center;
    }

    .adresse, .navn {
        grid-column: 1 / 3;
    }

    footer {
        background-color: var(--bakgrunnsfarge);
        color: var(--tekstfarge);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        height: 200px;
        width: 100vw;
    }
</style>