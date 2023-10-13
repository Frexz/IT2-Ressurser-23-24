<script>
    let aktiviteter = ["kano", "orientering", "klatring", "fiske", "svømming"]
    let valgt = ""
</script>

<div class="aktiviteter">
    <h1>Sommeraktiviteter</h1>

    <select bind:value={valgt} multiple>
        {#each aktiviteter as aktivitet}
            <option value="{aktivitet.toUpperCase()}">{aktivitet.toUpperCase()}</option>
        {/each}
    </select>

    <p>Hold inne Ctrl-tasten for å velge flere alternativer.</p>

    <h3>Du har valgt: <span style="color: #F5FCCD">{valgt}</span></h3>
</div>

<style>
    h1 {
        color: #12486B;
    }

    select {
        height: 90px;
        width: 120px;
    }

    .aktiviteter {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #78D6C6;
        height: 100vh;
        width: 100vw;
    }
</style>