<script>
    let navn
    let alder
    let hundenavn
    let hundealder
</script>

<div class="innhold">
    <div class="inputfelt">
        <input type="text" placeholder="Skriv inn ditt navn" bind:value={navn}>
        <input type="number" placeholder="Skriv inn din alder" bind:value={alder}>
        <input type="text" placeholder="Skriv inn hunden din sitt navn" bind:value={hundenavn}>
        <input type="number" placeholder="Skriv inn hunden din sin alder" bind:value={hundealder}>
    </div>

    <div class="tekst">
        <h1>Hei, {navn}!</h1>
        <h1>Du er {alder} år gammel.</h1>

        <h2>Hunden din heter {hundenavn}.</h2>
        <h2>Den er {hundealder} år.</h2>

        <h3>Alderen din tilsvarer {alder*5} hundeår</h3>
    </div>
</div>




<style>
    h1 {
        color: green;
    }

    h2 {
        color: pink;
    }

    h3 {
        color: purple;
    }

    input {
        margin: 10px;
    }

    .innhold {
        display: flex;
    }

    .inputfelt {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 50px;
    }
</style>