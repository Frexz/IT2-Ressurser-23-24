<script>
    export let navn
    export let frukt
    export let lenke
    export let farge
</script>

<div class="faktakort" style="--backgroundColor: {farge};">
    <h1>{@html frukt}</h1>
    <div class="fakta">
        <p><slot></slot></p>
    </div>
    <a href={lenke} target="_blank">Fakta om {navn}</a>
</div>

<style>
    p {
        font-size: 18px;
    }

    .fakta {
        margin-bottom: 5px;
    }

    .faktakort {
        background-color: var(--backgroundColor);
        border: 3px solid rgb(57, 52, 52);
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        width: 20vw;
    }
</style>